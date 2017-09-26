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

namespace GeoService\Bundles\Pages\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Pages\Validation\Validation;

class Action extends BaseAction
{
    /**
     * Save Pages
     *
     * @param array $args Pages.
     *
     * @return Pages
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Pages\Actions\Save(
            $this->getContainer()
        );
        
        $page = $save->onUpdate($args);

        return $page;
    }
}
