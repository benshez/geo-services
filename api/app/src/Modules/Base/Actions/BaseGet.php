<?php
/**
 * BaseGet File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseSave
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Modules\Base\Actions;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;

class BaseGet extends BaseAction
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

            $objects = array_map(
                function ($object) {
                    return $object;
                }, $objects
            );

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
