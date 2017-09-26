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
            
            $contact = $this->onBaseActionSave()->save($contact);
        }

        if ($contact->getId()) {
            $contact = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $contact->getId()]
            );
            
            return array(
                'id' => $contact->getId(),
                'entity' => $contact->getEntity()->getId(),
                'role' => $contact->getRole()->getId(),
                'enabled' => $contact->getEnabled(),
                'locked' => $contact->getLocked(),
                'username'=> $contact->getUsername(),
                'usersurname'=> $contact->getUsersurname(),
                'address'=> $contact->getAddress(),
                'city'=> $contact->getCity(),
                'state'=> $contact->getState(),
                'post_code'=> $contact->getPostCode(),
                'phone'=> $contact->getPhone(),
                'email'=> $contact->getEmail(),
                'website'=> $contact->getWebsite(),
                'facebook'=> $contact->getFacebook(),
                'twitter'=> $contact->getTwitter(),
                'logo'=> $contact->getLogo(),
                'abn'=> $contact->getEntity()->getIdentifier(),
                'token_char' => $contact->getTokenChar(),
                'token_expiry' => $contact->getTokenExpiry(),
            );
        }

        return false;
    }
}
