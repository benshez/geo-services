<?php

namespace GeoService\Bundles\Industries\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Industries\Interfaces\IIndustriesModel;
use GeoService\Bundles\Industries\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Bundles\Industries\Entity\Industries;

class Model extends BaseModel implements IIndustriesModel
{
    protected $validator = null;
    const KEY = 'id';
    const DESCRIPTION = 'description';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }

    public function autoComplete($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'industries',
            'autocomplete',
            array(self::DESCRIPTION => $args)
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        return $this->getEntityManager()
        ->getRepository($this->getConfig()->getOption(
            'name',
            'industries'
        ), [[self::DESCRIPTION => $args]])
        ->findOneByAutoComplete([self::DESCRIPTION => $args]);
    }
    
    public function onAdd($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'industries',
            'add',
            [
                $args[self::DESCRIPTION],
                $args[self::DESCRIPTION]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = new Industries();
        $entity->setDescription($args[self::DESCRIPTION]);
        $this->persistAndFlush($entity);
        
        if ($entity->getId()) {
            $entity = $this->getEntityById('industries', self::KEY, $entity->getId());
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
            'industries',
            'update',
            [
                $id[self::KEY],
                $args[self::DESCRIPTION],
                $args[self::DESCRIPTION]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        $entity = $this->getEntityById('industries', self::KEY, $id);

        if (!$entity) {
            return false;
        }

        $entity->setDescription($args[self::DESCRIPTION]);
        $this->persistAndFlush($entity);
        $entity = $this->getEntityById('industries', self::KEY, $id);

        if ($entity) {
            return $entity;
        }
        
        return false;
    }

    public function onDelete($id)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            'industries',
            'delete',
            [
                $id[self::KEY]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = $this->getEntityById('industries', self::KEY, $id);
        
        if (!$entity) {
            return false;
        }

        $this->removeAndFlush($entity);

        return true;
    }
}
