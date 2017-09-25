<?php
/**
 * BaseHydrate File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseHydrate
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Modules\Base\Actions;

use \ReflectionObject;
use Doctrine\Common\Util\Inflector;
use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;
use Doctrine\Common\Annotations\AnnotationReader;

class BaseHydrate extends BaseAction
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
     * @param       $entity Sender Is Entity Class.
     *
     * @param array $args Args Is Arguments To Pass.
     *
     * @return Entity Object
     */
    public function hydrate($entity, array $args)
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
