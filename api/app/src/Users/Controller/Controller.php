<?php

namespace GeoService\Users\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Users\Manager\Manager;
use GeoService\Base\BaseController;

final class Controller extends BaseController {

	private $resource;

	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}

	public function authenticateOne(RequestInterface $request, ResponseInterface $response, $args)
	{
		$config = $this->manager->authenticate($request->getParam('email'), $request->getParam('password'));

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No user found with that id.');
	}
}
