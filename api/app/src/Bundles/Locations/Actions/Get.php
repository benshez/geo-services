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
use GeoService\Bundles\Locations\Actions\Action;
use GeoService\Bundles\Locations\Validation\Validation;

class Get extends Action
{
    const REFERENCE = 'locations';
    const REFERENCE_OBJECT = 'name';
}
