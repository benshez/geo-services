<?php

namespace GeoService\Modules\Base\Actions;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;

/**
 * Base Class For All Get Actions
 * Ben van Heerden
 * 1
 * 0
 * 0
 * BaseGet
 * benshez1@gmail.com
 */
class BaseGet extends BaseActions
{
    /**
     * Initialise BaseAction To Set Container
     *
     * @param ContainerInterface $container ContainerInterface.
     *
     */
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }
    
    /**
     * Base Get Action
     *
     * @param string $entity Entity Class.
     *
     * @param array  $args   Args Is Arguments To Pass.
     *
     * @return Entity Object
     */
    public function get(string $entity, array $args = null)
    {
        if ($args === null) {
            $objects = $this->getEntityManager()->getRepository($entity)->findAll();

            $objects = array_map(function ($object) {
                return $object;
            }, $objects);

            return $objects;
        } else {
            $object = $this->getEntityManager()->getRepository($entity)->findOneBy($args);
            
            if ($object) {
                return $object;
            }
        }

        return false;
    }
}
