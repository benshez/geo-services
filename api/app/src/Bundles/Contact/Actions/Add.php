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
use GeoService\Bundles\Contact\Entity\Contact;
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
        
        $contact = new Contact();

        if (isset($args[self::PASSWORD])) {
            $bcrypt = new Bcrypt();
            $password = $bcrypt->create($args[self::PASSWORD]);
            $args[self::PASSWORD] = $password;
        }

        $role = $this->onBaseActionGet()->get(
            $this->getReference('roles'),
            [self::KEY => $args['role']]
        );
        
        $args['role'] = $role;
            
        if ($args[self::ABN]) {
            $entity = new \GeoService\Bundles\Entities\Actions\Add(
                $this->getContainer()
            );

            $entity = $entity->onAddByABRLookup($args['abn']);

            if ($entity) {
                $args['entity'] = $entity;
            }
        }
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $contact = $hydrate->hydrate($contact, $args);
        
        $contact = $this->onBaseActionSave()->save($contact);
        
        if ($contact->getId()) {
            $contact = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $contact->getId()]
            );
            
            $contact = $this->contactToArray($contact);

            return $contact;
        }

        return false;
    }
}
