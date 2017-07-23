<?php

namespace GeoService\Industries\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Industries\Manager\Manager;
use GeoService\Base\BaseController;

final class Controller extends BaseController {
	
	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}

	public function autoComplete(RequestInterface $request, ResponseInterface $response, $args) {
		$config = $this->manager->autoComplete($args['description']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No industries found with that description.');
	}
}
