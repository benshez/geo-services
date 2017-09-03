<?php

namespace GeoService\Bundles\Contact\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Crypt\Password\Bcrypt;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Bundles\Contact\Entity\Contact;
use GeoService\Bundles\Entities\Entity\Entities;
use GeoService\Bundles\Industries\Entity\Industries;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Modules\Lookup\ABN\AbnLookup;

class Model extends BaseModel implements IContactModel
{
	protected $validator = null;
	protected $roles = null;
	protected $industries = null;
	protected $entities = null;
	protected $result = null;

    const KEY = 'id';
    const ROLE = 'role';
    const CONTACT_NAME = 'username';
    const CONTACT_SURNAME = 'surname';
    const PASSWORD = 'password';
    const EMAIL = 'email';
    const LOGO = 'logo';
    const CREATE_ENTITY = 'addEntity';
    const ABN = 'abn';
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
	
	private function validateAbn($abn)
    {
        return $this->getValidator()->isValidAbn($abn);
	}

	private function onAddRole()
	{
		$this->roles = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);
		return $this->roles;
	}

	private function onAddIndustry()
	{
		$this->industries = $this->getEntityById('industries', 'type', $args[self::INDUSTRY]);

        if (!$this->industries) {
			$this->entities = new Industries();
		}
		
		return $this->industries;
	}

	private function onAddEntity()
	{
		$this->entities = $this->getEntityById('entities', 'identifier', $args[self::ABN]);
		
		if (!$this->entities) {
			$this->entities = new Entities();
			$this->entities->setEnabled(1);
			$this->entities->setExpiresAt($date->add(new \DateInterval('P30D')));

			$abnlookup = new AbnLookup($this->getSettings());

			$this->result = $abnlookup->searchByAbn($args[self::ABN]);

			$this->entities->setIndustry($this->onAddIndustry());
		}

		return $this->entities;
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
		//$this->guid = $guid;
		//60 943 948 191
	
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
		
		if ($args[self::ABN] && !$this->validateAbn($args[self::ABN])) {
			return $this->getValidator()->getMessagesAray();
		}
			
			
		
        $date = new \DateTime('now', new \DateTimeZone($this->getSettings()['time_zone']));
        
        $salt = null;

        $bcrypt = ($salt) ? new Bcrypt(array(
            'salt' => $salt,
            'cost' => 10
        )) : new Bcrypt();

        $password = $bcrypt->create($args[self::PASSWORD]);

		$role = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);
		
		$industry = $this->getEntityById('industries', self::KEY, $args[self::INDUSTRY]);
		
		$entities = null;


        
        $entity = new Contact();
        $entity->setRole($this->onAddRole());
        $entity->setUsername($args[self::CONTACT_NAME]);
        $entity->setUsersurname($args[self::CONTACT_SURNAME]);
        $entity->setEmail($args[self::EMAIL]);
        $entity->setSalt('1');
        $entity->setPassword($password);
        $entity->setEnabled(1);
        $entity->setLocked(0);
        
        if (($args[self::ABN] || $args[self::CREATE_ENTITY]) && ($industry)) {
            if ((!$entities || !$entities->getId())) {
				//$entities = new Entities();
				//$entities = new \GeoService\Bundles\Entities\Model\Model($this->getContainer());
				//$entities->onAdd(array('abn'=>$args[self::ABN], 'industry' => $industry));
            }
            $entities->setEnabled(1);
            $entities->setExpiresAt($date->add(new \DateInterval('P30D')));

            if ($industry->getId()) {
                $entities->setIndustry($industry);
            }
            
            //$this->persistAndFlush($entities);
            $entity->setEntity($this->onAddEntity());
        }
        
        
        if (isset($args[self::LOGO])) {
            $entity->setLogo($args[self::LOGO]);
        }

        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('entities', self::KEY, $entity->getId());
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
