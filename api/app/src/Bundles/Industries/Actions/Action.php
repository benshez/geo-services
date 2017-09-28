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

namespace GeoService\Bundles\Industries\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Industries\Validation\Validation;

class Action extends BaseAction
{
    /**
     * Find Industries
     *
     * @param array $args Industry.
     *
     * @return Industry
     */
    public function autoComplete($args)
    {
        $industry = new \GeoService\Bundles\Industries\Actions\Get(
            $this->getContainer()
        );
        
        $industry = $industry->autoComplete($args);

        return $industry;
    }
        
    /**
     * Save Industry
     *
     * @param array $args Industry.
     *
     * @return Industry
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Industries\Actions\Save(
            $this->getContainer()
        );
        
        $industry = $save->onUpdate($args);

        return $industry;
    }
    
    /**
     * Add Industry
     *
     * @param array $args Industry.
     *
     * @return Industry
     */
    public function onAdd(array $args)
    {
        $add = new \GeoService\Bundles\Industries\Actions\Add(
            $this->getContainer()
        );
        
        $industry = $add->onAdd($args);

        return $industry;
    }
    
    /**
     * Delete Industry
     *
     * @param array $args Industry ID.
     *
     * @return Industry
     */
    public function onDelete(array $args)
    {
        $delete = new \GeoService\Bundles\Industries\Actions\Delete(
            $this->getContainer()
        );
        
        $industry = $delete->onDelete($args);

        return $industry;
    }
}
