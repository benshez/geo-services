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
    
    public function autoComplete($description)
    {
        if (!$this->formIsValid(
            'autocomplete',
            [
                $description,
                $description
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        return $this->getEntityManager()
        ->getRepository($this->getConfig()->getOption(
            'name',
            'industries'
        ), [[self::DESCRIPTION => $description]])
        ->findOneByAutoComplete([self::DESCRIPTION => $description]);
    }
    
    public function onAdd($description)
    {
        if (!$this->formIsValid(
            'add',
            [
                $description[self::DESCRIPTION],
                $description[self::DESCRIPTION]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = new Industries();
        $entity->setDescription($description[self::DESCRIPTION]);
        $this->persistAndFlush($entity);
        $entity = $this->get($this->getConfig()->getOption(
            'name',
            'industries'
        ), [self::KEY => $entity->getId()]);

        if ($entity) {
            return $entity;
        }

        return false;
    }

    public function onUpdate($id, $description)
    {
        if (!$this->formIsValid(
            'update',
            [
                $id[self::KEY],
                $description[self::DESCRIPTION],
                $description[self::DESCRIPTION]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        $entity = $this->get($this->getConfig()->getOption(
            'name',
            'industries'
        ), [self::KEY => $id]);

        if (!$entity) {
            return false;
        }

        $entity->setDescription($description[self::DESCRIPTION]);
        $this->persistAndFlush($entity);
        $entity = $this->get($this->getConfig()->getOption(
            'name',
            'industries'
        ), [self::KEY => $id]);

        if ($entity) {
            return $entity;
        }
        
        return false;
    }

    public function onDelete($id)
    {
        if (!$this->formIsValid(
            'delete',
            [
                $id[self::KEY]
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $entity = $this->get($this->getConfig()->getOption(
            'name',
            'industries'
        ), [self::KEY => $id]);

        if (!$entity) {
            return false;
        }

        $this->removeAndFlush($entity);

        return true;
    }

    private function formIsValid($extention, $fields)
    {
        $validators = $this->getConfig()->getOption('validators', 'industries', $extention);
        return $this->getValidator()->formIsValid(
            $validators,
            $fields
        );
    }
}
