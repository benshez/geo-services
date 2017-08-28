<?php

namespace GeoService\Bundles\Users\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Users\Interfaces\IUsersController;
use GeoService\Modules\Base\Options\BaseOptions;

class Controller extends BaseController implements IUsersController
{
    public function authenticateOne(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
		return $this->fetched(
			$response,
			$this->model->authenticate(
				$request->getParam('email'),
				$request->getParam('password')
			),
			new BaseOptions(
				array('part' => 'messages',
				'class' => 'users',
				'extention' => 'validation:authenticate:message:UserNotFound')
			)
		);
    }
}
