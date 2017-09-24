<?php

namespace GeoService\Modules\Base\Actions;

use \ReflectionObject;
use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;
use Doctrine\Common\Annotations\AnnotationReader;

/**
 * Base Class For All Get Actions
 * Ben van Heerden
 * 1
 * 0
 * 0
 * BaseGet
 * benshez1@gmail.com
 */
class BasePost extends BaseActions
{
    const PROP_NAME = 'name';
    const ANNOTATION_NAME = 'Doctrine\ORM\Mapping\Column';
    const SETTER_START = 'set%s';

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
     * Base Ghydrate Entity Action
     *
     * @param string $entity Sender Is Entity Class.
     *
     * @param array  $args   Args Is Arguments To Pass.
     *
     * @return Entity Object
     */
    public function hydrateEntity(string $entity, array $args)
    {
        $refObj = new \ReflectionObject($entity);
        $reader = new AnnotationReader();
        $columns = array_column($refObj->getProperties(), self::PROP_NAME);
        
        foreach ($args as $key => $property) {
            $setter = sprintf(self::SETTER_START, ucfirst(Inflector::camelize($key)));
            $column = array_search($key, $columns);
            $annotation = $reader->getPropertyAnnotation(
                $refObj->getProperties()[$column],
                self::ANNOTATION_NAME
            );
            
            if ($annotation && method_exists($entity, $setter)) {
                if (isset($args[$key])) {
                    $entity->$setter($args[Inflector::tableize($annotation->name)]);
                }
            }
        }

        return $entity;
    }
}
