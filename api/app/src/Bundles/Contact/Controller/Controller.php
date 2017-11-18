<?php

/**
 * This file is part of the GeoService API.
 *
 * PHP Version 7.1.9
 *
 * @category  GeoService
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Contact\Controller;

use GeoService\Bundles\Contact\Interfaces\IContactController;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Modules\Base\Options\BaseOptions;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class Controller extends BaseController implements IContactController
{
    private $_options = [
        'part' => 'messages',
        'class' => 'contact',
        'extention' => 'validation:authenticate:message:UserNotFound',
    ];

    /**
     * Authenticate Contact.
     *
     * @param RequestInterface $request Request.
     *
     * @param ResponseInterface $response Response.
     *
     * @param array $args Arguments.
     *
     * @return boolean
     */
    public function authenticateOne(
        RequestInterface $request,
        ResponseInterface $response,
        array $args
    ) {
        $fetched = $this->fetched(
            $request,
            $response,
            $this->getAction()->authenticate(
                $request->getParam('email'),
                $request->getParam('password')
            ),
            new BaseOptions($this->_options)
        );

        if ($fetched) {
            return $fetched;
        }

        return false;
    }
}
