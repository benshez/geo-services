<?php
/**
 * IBaseAction File Doc Comment
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

namespace GeoService\Modules\Base\Interfaces;

use Interop\Container\ContainerInterface;

interface IBaseAction
{
    /**
     * IBaseAction
     *
     * @param ContainerInterface $container Container.
     *
     * @return void
     */
    public function __construct(ContainerInterface $container);
}
