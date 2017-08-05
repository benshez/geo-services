<?php

namespace GeoService\Locations\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Locations\Manager\Manager;
use GeoService\Base\BaseController;

final class Controller extends BaseController {

	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}

	public function fetchAllByIndustryCode(RequestInterface $request, ResponseInterface $response, $args) {
		$config = $this->manager->fetchAllByIndustryCode($args['industry']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No suppliers from the selected industry found in your area.');
	}
}
