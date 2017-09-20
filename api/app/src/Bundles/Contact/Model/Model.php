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

    const REFERENCE = 'contact';
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
                $this->business->legalName->givenName.', '. $this->business->legalName->familyName :
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
        $entity = $this->getEntityById(self::REFERENCE, self::KEY, $args[self::KEY]);
        
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
                self::REFERENCE,
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
            $entity = $this->getEntityById(self::REFERENCE, self::KEY, $entity->getId());
            return $entity;
        }

        return false;
    }

    public function authenticate($email, $password)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'authenticate',
            [self::CONTACT_NAME => $email, self::PASSWORD => $password]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $contact = $this->get($this->getConfig()->getOption(
            'name',
            self::REFERENCE
        ), [self::EMAIL => $email]);
        
        if ($contact) {
            if (!$this->formIsValid(
                $this->getValidator(),
                self::REFERENCE,
                'authentication',
                ['user' => [self::PASSWORD => $password, 'hash' => $contact->getPassword()]]
            )) {
                return $this->validator->getMessagesAray();
            }
            return $contact;
        }

        return false;
    }
    
    public function onAdd($args)
    {
        $entity = $this->getEntityById(self::REFERENCE, 'email', $args[self::EMAIL]);

        if ($entity) {
            $this->getValidator()->setMessagesArray(
                null,
                self::REFERENCE,
                'validation:add:message:UserExists'
            );
            return $this->getValidator()->getMessagesAray();
        }

        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'add',
            $args
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $bcrypt = new Bcrypt();

        $password = $bcrypt->create($args[self::PASSWORD]);
        
        $args[self::PASSWORD] = $password;
        $args['salt'] = '1';
        $args['enabled'] = 1;
        $args['locked'] = 0;

        $entity = new Contact();
        
        $entity = $this->hydrateEntity($entity, $args);

        $entity->setRole($this->onAddRole($args));
  
        if ($args[self::ABN] && $this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'abn',
            $args
        )) {
            $entities = $this->onAddEntity($args);

            if ($entities) {
                $entity->setEntity($entities);
            }
        } else {
            return $this->getValidator()->getMessagesAray();
        }
        
        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById(self::REFERENCE, self::KEY, $entity->getId());
            return $entity;
        }

        return false;
    }

    public function onUpdate($s, $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'update',
            $args
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = $this->getEntityById(self::REFERENCE, self::KEY, $args[self::KEY]);

        if ($entity && $entity->getId()) {
            if (isset($args[self::PASSWORD])) {
                $bcrypt = new Bcrypt();
                $password = $bcrypt->create($args[self::PASSWORD]);
                $args[self::PASSWORD] = $password;
            }

            $entity = $this->hydrateEntity($entity, $args);
        
            $entity->setRole($this->onAddRole($args));

            if ($args[self::ABN] && $this->formIsValid(
                $this->getValidator(),
                self::REFERENCE,
                'abn',
                $args
            )) {
                $entities = $this->onAddEntity($args);
                if ($entities) {
                    $entity->setEntity($entities);
                }
            } else {
                return $this->getValidator()->getMessagesAray();
            }

            $this->persistAndFlush($entity);
        }

        if ($entity->getId()) {
            $entity = $this->getEntityById(self::REFERENCE, self::KEY, $entity->getId());
            return $entity;
        }

        return false;
    }

    public function onDelete($id)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'delete',
            [
                'id' => $id
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        $entity = $this->getEntityById(self::REFERENCE, self::KEY, $id);
        
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
    
    public function onGetActiveUserRoleByToken($token)
    {
        $user = $this->getEntityById(self::REFERENCE, 'tokenChar', $token);

        $curr_date = date('Y-m-d');

        if ($user->getTokenExpiry() > $curr_date) {
            return false;
        }

        if ($user->getLocked() || !$user->getEnabled()) {
            return false;
        }
        
        return $user->getRole()->getRole();
    }
}
