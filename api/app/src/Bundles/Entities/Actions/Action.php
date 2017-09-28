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

namespace GeoService\Bundles\Entities\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Entities\Validation\Validation;

class Action extends BaseAction
{
    /**
     * Save Entities
     *
     * @param array $args Entities.
     *
     * @return Entities
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Entities\Actions\Save(
            $this->getContainer()
        );
        
        $entity = $save->onUpdate($args);

        return $entity;
    }
    
    /**
     * Add Entities
     *
     * @param array $args Entities.
     *
     * @return Entities
     */
    public function onAdd(array $args)
    {
        $add = new \GeoService\Bundles\Entities\Actions\Add(
            $this->getContainer()
        );
        
        $entity = $add->onAdd($args);

        return $entity;
    }
    
    /**
     * Delete Entities
     *
     * @param array $args User ID.
     *
     * @return Entities
     */
    public function onDelete(array $args)
    {
        $delete = new \GeoService\Bundles\Entities\Actions\Delete(
            $this->getContainer()
        );
        
        $entity = $delete->onDelete($args);

        return $entity;
    }
}
