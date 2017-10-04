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

namespace GeoService\Bundles\Entities\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Entities\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Entities\Validation\Validation;
use GeoService\Bundles\Entities\Entity\Entities;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'entities';
    const KEY = 'id';
    
    /**
     * Save Entity
     *
     * @param array $args Entity.
     *
     * @return Entity
     */
    public function onAdd(array $args)
    {
        $validator = new Validation($this);

        if (!$this->formIsValid(
            $this->getValidator($validator),
            self::REFERENCE,
            'add',
            $args
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }

        $entity = new Entities();
        
        $hydrate = new BaseHydrate($this->getContainer());

        $entity = $this->onBaseActionSave()->save(
            $hydrate->hydrate($entity, $args)
        );
  
        if (!$entity) {
            return false;
        }

        if ($entity->getId()) {
            $entity = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                array(self::KEY => $industry->getId())
            );
            
            return $entity;
        }

        return false;
    }
    
    /**
     * Add Entity By ABR Lookup
     *
     * @param string $abn ABR Lookup Entity Code.
     *
     * @return Entity
     */
    public function onAddByABRLookup(string $abn)
    {
        $entity = false;

        $entity = $this->onBaseActionGet()->get(
            $this->getReference('entities'),
            array('identifier' => (int) str_replace(' ', '', $abn))
        );

        if ($entity && $entity->getId()) {
            return $entity;
        }
        
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
            
                $industry = false;
                                    
                if ($business->entityType->entityTypeCode) {
                    $industry = new \GeoService\Bundles\Industries\Actions\Add(
                        $this->getContainer()
                    );
                    
                    if ($abn != '') {
                        $industry = $industry->onAddByABRLookup(
                            $abn,
                            $business->entityType->entityTypeCode
                        );
                    } else {
                        $industry = $industry->onAddByABRLookup(
                            '',
                            $business->entityType->entityTypeCode
                        );
                    }
                }
                
                $entityArgs = array(
                    'identifier' => $business->ABN->identifierValue,
                    'enabled' => 1,
                    'name' => $entitiesName,
                    'status' => $business->entityStatus->entityStatusCode,
                    'state' => $state,
                    'postCode' => $poCode,
                    'expiresAt' => $config->getDateTimeFuture($days),
                    'industry' => ($industry) ? $industry : null,
                );
                
                $entity = $this->onAdd($entityArgs);

                if ($entity) {
                    return $entity;
                }
            }
        }

        return false;
    }
}
