<?php
/**
 * BaseSave File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseAction
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Modules\Base\Actions;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;

class BaseSave extends BaseAction
{
    const CURRENT_TIMESTAMP = 'CURRENT_TIMESTAMP';

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
     * Base Updated At And Created Date Action
     *
     * @param \ReflectionObject $entity Entity Class.
     *
     * @return void
     */
    private function _setTimestamps(\ReflectionObject $entity)
    {
        $date = $this->getDateTimeForZone();

        $entity->setUpdatedAt($date);
    
        if ($entity->getCreatedAt() === self::CURRENT_TIMESTAMP ||
            null === $entity->getCreatedAt()
        ) {
            $entity->setCreatedAt($date);
        }
    }
    
    /**
     * Base Save Action
     *
     * @param \ReflectionObject $entity Entity Class.
     *
     * @return Entity Object
     */
    public function save(\ReflectionObject $entity)
    {
        $this->_setTimestamps();
        
        try {
            $manager = $this->getEntityManager();
            $manager->persist($entity);
            $manager->flush($entity);
        } catch (UniqueConstraintViolationException $e) {
            return false;
        }
    }
    
    /**
     * Base Disable Action
     *
     * @param \ReflectionObject $entity Entity Class.
     *
     * @return void
     */
    public function disable(\ReflectionObject $entity)
    {
        $entity->setEnabled(false);
        $this->save($entity);
    }
    
    /**
     * Base Enable Action
     *
     * @param \ReflectionObject $entity Entity Class.
     *
     * @return void
     */
    public function enable(\ReflectionObject $entity)
    {
        $entity->setEnabled(true);
        $this->save($entity);
    }
}
