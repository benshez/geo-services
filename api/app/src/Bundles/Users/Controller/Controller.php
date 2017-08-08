<?php

namespace GeoService\Bundles\Users\Controller;

use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Users\Interfaces\IUsersController;

final class Controller extends BaseController implements IUsersController
{

	public function authenticateOne(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	) {

		$config = $this->model->authenticate($request->getParam('email'), $request->getParam('password'));

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, $this->model->getNotFoundMessageFromConfig($this->model->getMessagePart()));
	}
}
