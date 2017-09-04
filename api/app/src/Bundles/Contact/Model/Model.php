<?php

namespace GeoService\Bundles\Contact\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Crypt\Password\Bcrypt;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Bundles\Roles\Entity\Roles;
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
    protected $business = null;

    const KEY = 'id';
    const ROLE = 'role';
    const CONTACT_NAME = 'username';
    const CONTACT_SURNAME = 'surname';
    const PASSWORD = 'password';
    const EMAIL = 'email';
    const LOGO = 'logo';
    const ABN = 'abn';

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

    private function onAddRole($args)
    {
        $this->roles = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);

        if (!$this->roles) {
            $this->roles = new Roles();
            $this->roles->setRole('User');
            $this->roles->setEnabled(1);

            $this->persistAndFlush($this->roles);

            $this->roles = $this->getEntityById('roles', self::KEY, $this->roles->getId());
        }

        return $this->roles;
    }

    private function onAddIndustry($args)
    {
		//TODO: Change 00012 to data return from ABN Lookup;
        $this->industries = $this->getEntityById('industries', 'type', '00012');

        if (!$this->industries) {
            $this->industries = new Industries();
            $this->industries->setEnabled(1);
            $this->industries->setType('00012');
            $this->industries->setDescription('Individual/Sole Trader');

            $this->persistAndFlush($this->industries);

            $this->industries = $this->getEntityById('industries', self::KEY, $this->industries->getId());
        }
        
        return $this->industries;
    }

    private function onAddEntity($args)
    {
        $this->entities = $this->getEntityById('entities', 'identifier', $args[self::ABN]);
        
        if (!$this->entities) {
			$date = new \DateTime('now', new \DateTimeZone($this->getSettings()['time_zone']));
			//$abnlookup = new AbnLookup($this->getSettings());
			//$this->business = $abnlookup->searchByAbn($args[self::ABN]);
			
            $this->entities = new Entities();
			$this->entities->setEnabled(1);
			$this->entities->setIdentifier('12 345 678 911');
            $this->entities->setName('VAN HEERDEN, SHERYL');
            $this->entities->setStatus('Active');
            $this->entities->setState('QLD');
            $this->entities->setPostCode('4551');
            $this->entities->setExpiresAt($date->add(new \DateInterval('P30D')));

            $this->entities->setIndustry($this->onAddIndustry($args));

			$this->persistAndFlush($this->entities);

            $this->entities = $this->getEntityById('entities', self::KEY, $this->entities->getId());
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
        
        $entity = new Contact();
        $entity->setRole($this->onAddRole($args));
        $entity->setUsername($args[self::CONTACT_NAME]);
        $entity->setUsersurname($args[self::CONTACT_SURNAME]);
        $entity->setEmail($args[self::EMAIL]);
        $entity->setSalt('1');
        $entity->setPassword($password);
        $entity->setEnabled(1);
        $entity->setLocked(0);
        $entity->setState('QLD');
        $entity->setPostCode('4551');
        
        if ($args[self::ABN]) {
            $entity->setEntity($this->onAddEntity($args));
        }
        
        if (isset($args[self::LOGO])) {
            $entity->setLogo($args[self::LOGO]);
        }

        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('contact', self::KEY, $entity->getId());
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
