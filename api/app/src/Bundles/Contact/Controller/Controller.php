<?php

namespace GeoService\Bundles\Contact\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Contact\Interfaces\IContactController;
use GeoService\Modules\Base\Options\BaseOptions;

class Controller extends BaseController implements IContactController
{
    public function authenticateOne(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $this->fetched(
            $request,
            $response,
            $this->model->authenticate(
                $request->getParam('email'),
                $request->getParam('password')
            ),
            new BaseOptions(
                array('part' => 'messages',
                'class' => 'contact',
                'extention' => 'validation:authenticate:message:UserNotFound')
            )
        );
    }
}
