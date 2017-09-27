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
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Contact\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'contact';
    const KEY = 'id';
    const PASSWORD = 'password';
    const ABN = 'abn';
    const EMAIL = 'email';
    
    /**
     * Save Contact
     *
     * @param array $args Contact.
     *
     * @return Contact
     */
    public function onAdd(array $args)
    {
        if (isset($args[self::KEY])) {
            $contact = $this->exists(
                null,
                [self::KEY => $args[self::KEY]],
                $args[self::KEY]
            );
    
            if ($contact) {
                $contact = $this->contactToArray($contact);
                return $contact;
            }
        }

        $validator = new Validation($this);

        if (!$this->formIsValid(
            $this->getValidator($validator),
            self::REFERENCE,
            'add',
            $args
        ) || $this->exists(
            $validator,
            [self::EMAIL => $args[self::EMAIL]],
            $args[self::KEY]
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }
        
        $contact = new \GeoService\Bundles\Contact\Entity\Contact();

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
            $entity = new \GeoService\Bundles\Entities\Actions\Add(
                $this->getContainer()
            );

            $entity = $entity->onAddByABRLookup($args['abn']);

            if ($entity) {
                $contact->setEntity($entity);
            }
        } else {
            $messages = $this->getValidator()->getMessagesAray();
            return $messages;
        }
        
        try {
            $contact = $this->onBaseActionSave()->save($contact);
        } catch (\PDOException $e) {
            return false;
        } catch (\UniqueConstraintViolationException $e) {
            return false;
        }
        
        
        if ($contact->getId()) {
            $contact = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $contact->getId()]
            );
            
            return $this->contactToArray($contact);
        }

        return false;
    }
}
