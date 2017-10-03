<?php
/**
 * Save File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  Save
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Locations\Interfaces;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Interfaces\IBaseController;

interface ILocationsController extends IBaseController
{
    /**
     * Find Locations By Industry Code
     *
     * @param RequestInterface  $request  Request Interface.
     *
     * @param ResponseInterface $response Response Interface.
     *
     * @param array             $args     Args.
     *
     * @return Locations
     */
    public function findLocationsByIndustryCode(
        RequestInterface $request,
        ResponseInterface $response,
        array $args
    );
}
