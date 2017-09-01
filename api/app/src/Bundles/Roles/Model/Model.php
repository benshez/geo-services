<?php

namespace GeoService\Bundles\Roles\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Roles\Entity\Roles;
use GeoService\Bundles\Roles\Interfaces\IRolesModel;
use GeoService\Bundles\Roles\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IRolesModel
{
    protected $validator = null;
    const KEY = 'id';
    const DESCRIPTION = 'description';
    const ENABLED = 'enabled';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }
    
    public function onFindAll($args)
    {
        $roles = $this->get($this->getConfig()->getOption(
            'name',
            'roles'
        ), []);
        
        if ($roles) {
            return $roles;
        }

        return false;
    }

    public function onAdd($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'roles',
            'add',
            [
                $args[self::DESCRIPTION],
                $args[self::DESCRIPTION],
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = new Roles();
        $entity->setRole($args[self::DESCRIPTION]);
        $entity->setEnabled(1);
        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('roles', self::KEY, $entity->getId());
        }
        
        if ($entity && $entity->getId()) {
            return $entity;
        }

        return false;
    }

    public function onUpdate($id, $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'roles',
            'update',
            [
                $id[self::KEY],
                $args[self::DESCRIPTION],
                $args[self::DESCRIPTION],
                $args[self::ENABLED],
                $args[self::ENABLED]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        $entity = $this->getEntityById('roles', self::KEY, $id);

        if (!$entity) {
            return false;
        }

        $entity->setRole($args[self::DESCRIPTION]);
        $entity->setEnabled($args[self::ENABLED]);
        $this->persistAndFlush($entity);
        $entity = $this->getEntityById('roles', self::KEY, $id);

        if ($entity) {
            return $entity;
        }
        
        return false;
    }

    public function onDelete($id)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'roles',
            'delete',
            [
                $id[self::KEY]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = $this->getEntityById('roles', self::KEY, $id);
        
        if (!$entity) {
            return false;
        }

        if (!$entity->getEnabled()) {
            $this->removeAndFlush($entity);
        } else {
            $entity->setEnabled(false);
            $this->persistAndFlush($entity);
        }

        return true;
    }
}
