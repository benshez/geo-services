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

namespace GeoService\Bundles\Roles\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Roles\Actions\Action;
use GeoService\Bundles\Roles\Validation\Validation;

class Get extends Action
{
    const REFERENCE = 'roles';
    const REFERENCE_OBJECT = 'name';
}
