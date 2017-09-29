<?php
/**
 * BaseController File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseController
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Modules\Base\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Interfaces\IBaseAction;
use GeoService\Modules\Base\Interfaces\IBaseController;

class BaseController implements IBaseController
{
    private $_parameters = array();
    private $_action = array();

    /**
     * Base Controller
     *
     * @param IBaseAction $action Action.
     *
     * @return void
     */
    public function __construct(IBaseAction $action)
    {
        $this->setAction($action);
    }

    /**
     * Set Action
     *
     * @param IBaseAction $action Action.
     *
     * @return void
     */
    public function setAction(IBaseAction $action)
    {
        $this->_action = $action;
    }

    /**
     * Get Action
     *
     * @return action
     */
    public function getAction()
    {
        return $this->_action;
    }
    
    public function fetch(
        RequestInterface $request,
        ResponseInterface $response,
        $sender,
        array $arg = null,
        BaseOptions $options
    ) {
        return $this->fetched(
            $request,
            $response,
            $this->getAction()->get($sender, $args),
            $options
        );
    }

    public function fetchOne(
        RequestInterface $request,
        ResponseInterface $response,
        $sender,
        array $args,
        BaseOptions $options
    ) {
        return $this->fetched(
            $request,
            $response,
            $this->getAction()->get($sender, $args),
            $options
        );
    }
    
    public function fetched(
        RequestInterface $request,
        ResponseInterface $response,
        $args,
        BaseOptions $options
    ) {
        if ($args) {
            return $response->withJSON($args);
        }
        
        return $response->withStatus(
            404,
            $this->getAction()->getConfig()->getOption(
                $options->getOptions('part'),
                $options->getOptions('class'),
                $options->getOptions('extention')
            )
        );
    }

    
    public function onGet(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $response->withJSON(
            $this->getAction()->onGet($args)
        );
    }
        
    public function onAdd(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $response->withJSON(
            $this->getAction()->onAdd($request->getParsedBody())
        );
    }

    public function onUpdate(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $response->withJSON(
            $this->getAction()->onUpdate($request->getParsedBody())
        );
    }

    public function onDelete(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $response->withJSON(
            $this->getAction()->onDelete($args)
        );
    }
}
