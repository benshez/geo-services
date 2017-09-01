<?php

namespace GeoService\Bundles\Users\Model;

use Zend\Crypt\Password\Bcrypt;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Users\Entity\Users;
use GeoService\Bundles\Roles\Entity\Roles;
use GeoService\Bundles\Users\Interfaces\IUsersModel;
use GeoService\Bundles\Users\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IUsersModel
{
    protected $validator = null;
    const KEY = 'id';
    const ROLE = 'role';
    const USER_NAME = 'username';
	const PASSWORD = 'password';
	const LOGO = 'logo';

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
            'users',
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

        $user = $this->get($this->getConfig()->getOption(
            'name',
            'users'
        ), [self::USER_NAME => $email]);
        
        if ($user) {
            if (!$this->validateUser($password, $user->getSalt(), $user->getPassword())) {
                return $this->validator->getMessagesAray();
            }
            return $user;
        }

        return false;
    }
    
    public function onAdd($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'users',
            'add',
            [
                $args[self::ROLE],
                $args[self::ROLE],
                $args[self::USER_NAME],
                $args[self::USER_NAME],
                $args[self::PASSWORD],
                $args[self::PASSWORD]
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

		$entity = new Users();
		$role = new Roles();

		$role = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);

		$entity->setRole($role);
		$entity->setUsername($args[self::USER_NAME]);
		$entity->setSalt($bcrypt->getSalt());
		$entity->setPassword($password);
        $entity->setEnabled(1);
        $entity->setLocked(0);
		$entity->setExpiresAt($date->add(new \DateInterval('P30D')));
		
		if ($args[self::LOGO]) {
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
