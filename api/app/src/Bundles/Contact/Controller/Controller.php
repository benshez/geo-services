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
namespace GeoService\Bundles\Contact\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Contact\Interfaces\IContactController;

class Controller extends BaseController implements IContactController
{
    const OPTIONS = array('part' => 'messages',
    'class' => 'contact',
    'extention' => 'validation:authenticate:message:UserNotFound');
    
    /**
     * Authenticate Contact
     *
     * @param RequestInterface  $request  Request.
     *
     * @param ResponseInterface $response Response.
     *
     * @param array             $args     Arguments.
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
            new BaseOptions(self::OPTIONS)
        );
        
        if ($fetched) {
            return $fetched;
        }
        return false;
    }
}
