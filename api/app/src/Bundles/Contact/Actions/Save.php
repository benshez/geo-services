<?php
/**
 * Save File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  Save
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Contact\Actions;

use Zend\Crypt\Password\Bcrypt;
use GeoService\Modules\Config\Config;
use GeoService\Bundles\Contact\Actions\Action;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Actions\BaseHydrate;

class Save extends Action
{
    const REFERENCE = 'contact';
    const KEY = 'id';
    const PASSWORD = 'password';
    const ABN = 'abn';

    /**
     * Save User
     *
     * @param array $args User Password.
     *
     * @return User
     */
    public function onUpdate(array $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            'update',
            $args
        )) {
            $messages = $this->getValidator()->getMessagesAray();
            return $messages;
        }

        $contact = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args[self::KEY]]
        );

        if ($contact && $contact->getId()) {
            if (isset($args[self::PASSWORD])) {
                $bcrypt = new Bcrypt();
                $password = $bcrypt->create($args[self::PASSWORD]);
                $args[self::PASSWORD] = $password;
            }

            $hydrate = new BaseHydrate($this->getContainer());
            
            $contact = $hydrate->hydrate($contact, $args);
            
            $role = $this->onBaseActionGet()->get(
                $this->getReference('roles'),
                [self::KEY => $args['role']]
            );
        
            $contact->setRole($role);

            if ($args[self::ABN] && $this->formIsValid(
                $this->getValidator(new Validation($this)),
                self::REFERENCE,
                'abn',
                $args
            )) {
                $entity = $this->onBaseActionGet()->get(
                    $this->getReference('entities'),
                    ['identifier' => (int) str_replace(' ', '', $args['abn'])]
                );
                
                if (!$entity) {
                    $abnlookup = new \GeoService\Modules\Lookup\ABN\AbnLookup($this->getSettings());
                    $business = $abnlookup->searchByAbn($args['abn']);
                    $business = $business->ABRPayloadSearchResults
                    ->response->businessEntity201408;
                    
                    $config = new Config($this->getSettings());

                    $days = $this->getSettings()['trial_period'];

                    if (isset($business->legalName) || isset($business->mainName)) {
                        $entitiesName = isset($business->legalName) ?
                        $business->legalName->givenName.', '. $business->legalName->familyName :
                        $business->mainName->organisationName;

                        $state = 'N/A';
                        $poCode = 'N/A';

                        if (isset($this->business->mainBusinessPhysicalAddress)) {
                            $state = $this->business->mainBusinessPhysicalAddress->stateCode;
                            $poCode = $this->business->mainBusinessPhysicalAddress->postcode;
                        }

                        $industry = null;
                        
                        if ($business->entityType->entityTypeCode) {
                            $industry = $this->onBaseActionGet()->get(
                                $this->getReference('industries'),
                                ['type' => $business->entityType->entityTypeCode]
                            );
                            
                            if (null === $industry) {
                                $industry = new \GeoService\Bundles\Industries\Actions\Add(
                                    $this->getContainer()
                                );

                                $industryArgs = [
                                    'enabled' => 1,
                                    'type' => $business->entityType->entityTypeCode,
                                    'description' => $business->entityType->entityDescription,
                                ];
                                
                                $industry->onAdd($industryArgs);
                            }
                        }
                        
                        $entity = new \GeoService\Bundles\Entities\Actions\Add(
                            $this->getContainer()
                        );
                           
                        $entityArgs = [
                            'identifier' => $business->ABN->identifierValue,
                            'enabled' => 1,
                            'name' => $entitiesName,
                            'status' => $business->entityStatus->entityStatusCode,
                            'state' => $state,
                            'postCode' => $poCode,
                            'expiresAt' => $config->getDateTimeFuture($days),
                            'industry' => $industry,
                        ];
                        
                        $entity->onAdd($entityArgs);
                    }
                }

                if ($entity) {
                    $contact->setEntity($entity);
                }
            } else {
                $messages = $this->getValidator()->getMessagesAray();
                return $messages;
            }
            
            $contact = $this->onBaseActionSave()->save($contact);
        }

        if ($contact->getId()) {
            $contact = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $contact->getId()]
            );
            return $contact;
        }

        return false;
    }
}
