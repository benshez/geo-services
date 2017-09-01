<?php

namespace GeoService\Bundles\Contact\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Crypt\Password\Bcrypt;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Bundles\Contact\Entity\Contact;
use GeoService\Bundles\Users\Entity\Users;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IContactModel
{
    protected $validator = null;
    const KEY = 'id';
    const ROLE = 'role';
    const CONTACT_NAME = 'username';
    const CONTACT_SURNAME = 'surname';
    const PASSWORD = 'password';
    const EMAIL = 'email';
    const LOGO = 'logo';
    const CREATE_USER = 'addUser';
    const USER_ID = 'userId';
    const INDUSTRY = 'industry';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }

    private function validateUser($password, $salt, $hash)
    {
        return $this->getValidator()->validateUserCredentials($password, $salt, $hash);
    }
            
    public function authenticate($email, $password)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'contact',
            'authenticate',
            [
                $email,
                $email,
                $email,
                $password,
                $password
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $contact = $this->get($this->getConfig()->getOption(
            'name',
            'contact'
        ), [self::EMAIL => $email]);
        
        if ($contact) {
            if (!$this->validateUser($password, null, $contact->getPassword())) {
                return $this->validator->getMessagesAray();
            }
            return $contact;
        }

        return false;
    }
    
    public function onAdd($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'contact',
            'add',
            [
                $args[self::ROLE],
                $args[self::ROLE],
                $args[self::CONTACT_NAME],
                $args[self::CONTACT_NAME],
                $args[self::PASSWORD],
                $args[self::PASSWORD],
                $args[self::EMAIL],
                $args[self::EMAIL],
                $args[self::CONTACT_SURNAME],
                $args[self::CONTACT_SURNAME]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        $date = new \DateTime('now', new \DateTimeZone($this->settings['time_zone']));
        
        $salt = null;

        $bcrypt = ($salt) ? new Bcrypt(array(
            'salt' => $salt,
            'cost' => 10
        )) : new Bcrypt();

        $password = $bcrypt->create($args[self::PASSWORD]);

        $role = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);
        $industry = $this->getEntityById('industries', self::KEY, $args[self::INDUSTRY]);
        if ($args[self::USER_ID]) {
            $user = $this->getEntityById('users', self::KEY, $args[self::USER_ID]);
        }
        
        $entity = new Contact();
        $entity->setRole($role);
        $entity->setUsername($args[self::CONTACT_NAME]);
        $entity->setUsersurname($args[self::CONTACT_SURNAME]);
        $entity->setEmail($args[self::EMAIL]);
        $entity->setSalt('1');
        $entity->setPassword($password);
        $entity->setEnabled(1);
        $entity->setLocked(0);
        
        if (($args[self::USER_ID] || $args[self::CREATE_USER]) && ($industry)) {
            if ((!$user || !$user->getId())) {
                $user = new Users();
            }
            $user->setEnabled(1);
            $user->setExpiresAt($date->add(new \DateInterval('P30D')));

            if ($industry->getId()) {
                $user->setIndustry($industry);
            }
            
            $this->persistAndFlush($user);
            $entity->setUser($user);
        }
        
        
        if (isset($args[self::LOGO])) {
            $entity->setLogo($args[self::LOGO]);
        }

        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('users', self::KEY, $entity->getId());
        }
        
        if ($entity && $entity->getId()) {
            return $entity;
        }

        return false;
    }

    public function onUpdate($id, $args)
    {
    }

    public function onDelete($id)
    {
    }
}
