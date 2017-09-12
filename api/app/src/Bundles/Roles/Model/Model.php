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
	const ROLE = 'role';
    const DESCRIPTION = 'description';
	const ENABLED = 'enabled';
	const TABLE = 'roles';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }
    
    public function onFindAll($args)
    {
        $roles = $this->get($this->getConfig()->getOption(
            'name',
            self::TABLE
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
            self::TABLE,
            'add',
            [
                $args[self::DESCRIPTION],
                $args[self::DESCRIPTION],
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        return onAddOrUpdate($args, true);
    }

    public function onUpdate($id, $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::TABLE,
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
        
        return onAddOrUpdate($args);
    }

    public function onDelete($id)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::TABLE,
            'delete',
            [
                $id[self::KEY]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = $this->getEntityById(self::TABLE, self::KEY, $id);
        
        if (!$entity) {
            return false;
        }

        if (!$entity->getEnabled()) {
            $this->removeAndFlush($entity);
        } else {
            $entity->setEnabled(false);
            $this->persistAndFlush($entity);
        }

        return false;
	}
	
	public function onAddOrUpdate($role, $isAdding = false)
    {
        $entity = $this->getEntityById(self::TABLE, self::KEY, $role[self::KEY]);

        if (!$entity) {
			$isAdding = true;
            $entity = new Roles();
		}
		
		if ($isAdding) {
			$entity->setRole($role[self::DESCRIPTION]);
			$entity->setEnabled($role[self::ENABLED]);
			$this->persistAndFlush($entity);
			return $this->getEntityById(self::TABLE, self::KEY, $entity->getId());
		}
 
        if ($entity && $entity->getId()) {
            return $this->getEntityById(self::TABLE, self::KEY, $entity->getId());
        }

        return false;
    }
}
