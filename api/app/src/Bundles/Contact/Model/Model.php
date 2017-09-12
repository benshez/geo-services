<?php

namespace GeoService\Bundles\Contact\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Crypt\Password\Bcrypt;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Bundles\Roles\Model\Roles;
use GeoService\Bundles\Contact\Entity\Contact;
use GeoService\Bundles\Entities\Entity\Entities;
use GeoService\Bundles\Industries\Entity\Industries;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Modules\Lookup\ABN\AbnLookup;
use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Options\BaseOptions;

class Model extends BaseModel implements IContactModel
{
    protected $validator = null;
    protected $business = null;

    const KEY = 'id';
    const ROLE = 'role';
    const CONTACT_NAME = 'username';
    const CONTACT_SURNAME = 'usersurname';
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
        $roles = $this->getEntityById('roles', self::KEY, $args[self::ROLE]);

        if (!$roles) {
			$roles = new Roles();
			$roles = $this->hydrateEntity(
				$roles,
				array(
					'role' => 'User',
					'enabled' => 1
					)
			);

            $this->persistAndFlush($roles);

            $roles = $this->getEntityById('roles', self::KEY, $roles->getId());
        }

        return $roles;
    }

    private function onAddIndustry($args)
    {
        $industries = $this->getEntityById('industries', 'type', $this->business->entityType->entityTypeCode);

        if (!$industries) {
            $industries = new Industries();
            $industries->setEnabled(1);
            $industries->setType($this->business->entityType->entityTypeCode);
            $industries->setDescription($this->business->entityType->entityDescription);

            $this->persistAndFlush($industries);

            $industries = $this->getEntityById('industries', self::KEY, $industries->getId());
        }
        
        return $industries;
    }

    private function onAddEntity($args)
    {
        $entities = $this->getEntityById('entities', 'identifier', $args[self::ABN]);

        if (!$entities) {
			$abnlookup = new AbnLookup($this->getSettings());
			$this->business = $abnlookup->searchByAbn($args[self::ABN]);
			$this->business = $this->business->ABRPayloadSearchResults->response->businessEntity201408;

			$config = new Config($this->getSettings());
			$days = $this->getSettings()['trial_period'];

            if (isset($this->business->legalName) || isset($this->business->mainName)) {
				$entitiesName = isset($this->business->legalName) ?
				$this->business->legalName->givenName.','. $this->business->legalName->familyName :
				$this->business->mainName->organisationName;

                $entities = new Entities();
                $entities->setEnabled(1);
                $entities->setIdentifier($this->business->ABN->identifierValue);
                $entities->setStatus($this->business->entityStatus->entityStatusCode);
                $entities->setExpiresAt($config->getDateTimeFuture($days));
				$entities->setName($entitiesName);
               
                if (isset($this->business->mainBusinessPhysicalAddress)) {
                    $entities->setState($this->business->mainBusinessPhysicalAddress->stateCode);
                    $entities->setPostCode($this->business->mainBusinessPhysicalAddress->postcode);
                } else {
                    $entities->setState('N/A');
                    $entities->setPostCode('N/A');
                }

                if ($this->business->entityType->entityTypeCode) {
                    $entities->setIndustry($this->onAddIndustry($args));
                }
            
                $this->persistAndFlush($entities);

                $entities = $this->getEntityById('entities', self::KEY, $entities->getId());
            }
        }

        return $entities;
    }
		   
	public static function onAddContact($args)
	{
		$entity = $this->getEntityById('contact', self::KEY, $args[self::KEY]);
		
		if ($entity && $entity->getId()) {
			new Roles($args);
			$entity->setUsername();
			$entity->setUsersurname();
			$entity->setPassword();
			$entity->setSalt();
			$entity->setEnabled();
			$entity->setLocked();
			$entity->setAddress();
			$entity->setCity();
			$entity->setState();
			$entity->setPostCode();
			$entity->setPhone();
			$entity->setEmail();
			$entity->setWebsite();
			$entity->setFacebook();
			$entity->setTwitter();
			$entity->setTokenChar();
			$entity->setTokenExpiry();
			$entity->setLastLogin();
			$entity->setRole($this->onAddRole($args));

			if (isset($args[self::LOGO])) {
				$entity->setLogo($args[self::LOGO]);
			}

			if ($args[self::ABN] && $this->formIsValid(
				$this->getValidator(),
				'contact',
				'abn',
				[$args[self::ABN]]
			)) {
				$entities = $this->onAddEntity($args);
				if ($entities) {
					$entity->setEntity($entities);
				}
			} else {
				return $this->getValidator()->getMessagesAray();
			}
		}

		$this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('contact', self::KEY, $entity->getId());
            return $entity;
        }

        return false;
	}

    public function authenticate($email, $password)
    {
		$x = array_keys($this->getEntityManager()->getMetadataFactory()->getMetadataFor('\GeoService\Bundles\Contact\Entity\Contact')->reflFields);
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
            if (!$this->formIsValid(
				$this->getValidator(),
				'contact',
				'authentication',
				[['password' => $password, 'hash' => $contact->getPassword()]]
			)) {
                return $this->validator->getMessagesAray();
            }
            return $contact;
        }

        return false;
    }
    
    public function onAdd($args)
    {
		$entity = $this->getEntityById('contact', 'email', $args[self::EMAIL]);

		if ($entity) {
			$this->getValidator()->setMessagesArray(
				null,
				'contact',
				'validation:add:message:UserExists'
			);
			// $abnlookup = new AbnLookup($this->getSettings());
			// $this->business = $abnlookup->searchByAbn('34 241 177 887');

			// return $this->business;
			return $this->getValidator()->getMessagesAray();
		}

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

		return $this->onAddOrUpdate($args);

        $bcrypt = new Bcrypt();

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
        
        if ($args[self::ABN] && $this->formIsValid(
            $this->getValidator(),
            'contact',
            'abn',
			[$args[self::ABN]]
		)) {
			$entities = $this->onAddEntity($args);
			if ($entities) {
				$entity->setEntity($entities);
			}
        } else {
			return $this->getValidator()->getMessagesAray();
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

	//public function onAddOrUpdate($args)
	public function onUpdate($s, $args)
    {
		// if (!$this->formIsValid(
        //     $this->getValidator(),
        //     'contact',
        //     'update',
        //     [
        //         $args[self::KEY],
        //         $args[self::DESCRIPTION],
        //         $args[self::DESCRIPTION],
        //         $args[self::ENABLED],
        //         $args[self::ENABLED]
        //     ]
        // )) {
        //     return $this->getValidator()->getMessagesAray();
		// }

		$entity = $this->getEntityById('contact', self::KEY, $args[self::KEY]);

		if ($entity && $entity->getId()) {
			$entity = $this->hydrateEntity($entity, $args);
		
			$entity->setRole($this->onAddRole($args));

			// if (isset($args[self::LOGO])) {
			// 	$entity->setLogo($args[self::LOGO]);
			// }

			// if ($args[self::ABN] && $this->formIsValid(
			// 	$this->getValidator(),
			// 	'contact',
			// 	'abn',
			// 	[$args[self::ABN]]
			// )) {
			// 	$entities = $this->onAddEntity($args);
			// 	if ($entities) {
			// 		$entity->setEntity($entities);
			// 	}
			// } else {
			// 	return $this->getValidator()->getMessagesAray();
			// }

			$this->persistAndFlush($entity);
		}

        if ($entity->getId()) {
            $entity = $this->getEntityById('contact', self::KEY, $entity->getId());
            return $entity;
        }

        return false;
    }

    public function onDelete($id)
    {
		if (!$this->formIsValid(
            $this->getValidator(),
            'contact',
            'delete',
            [
                $id[self::KEY]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
		}
		
		$entity = $this->getEntityById('contact', self::KEY, $id);
        
        if (!$entity) {
            return false;
        }

        if (!$entity->getEnabled()) {
            $this->removeAndFlush($entity);
        } else {
            $entity->setEnabled(false);
            $this->persistAndFlush($entity);
        }
    }
}
