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
     * Save Entities
     *
     * @param array $args Entities.
     *
     * @return Entities
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Industries\Actions\Save(
            $this->getContainer()
        );
        
        $industry = $save->onUpdate($args);

        return $industry;
    }
}
