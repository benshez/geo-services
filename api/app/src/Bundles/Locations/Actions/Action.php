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

namespace GeoService\Bundles\Locations\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Locations\Validation\Validation;

class Action extends BaseAction
{
    /**
     * Save Locations
     *
     * @param array $args Locations.
     *
     * @return Locations
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Locations\Actions\Save(
            $this->getContainer()
        );
        
        $location = $save->onUpdate($args);

        return $location;
    }
    
    /**
     * Add Locations
     *
     * @param array $args Locations.
     *
     * @return Locations
     */
    public function onAdd(array $args)
    {
        $add = new \GeoService\Bundles\Locations\Actions\Add(
            $this->getContainer()
        );
        
        $location = $add->onAdd($args);

        return $location;
    }
    
    /**
     * Delete Locations
     *
     * @param array $args Locations ID.
     *
     * @return Locations
     */
    public function onDelete(array $args)
    {
        $delete = new \GeoService\Bundles\Locations\Actions\Delete(
            $this->getContainer()
        );
        
        $location = $delete->onDelete($args);

        return $location;
    }
}
