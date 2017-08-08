<?php

namespace GeoService\Bundles\Locations\Controller;

use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Locations\Interfaces\ILocationsController;

class Controller extends BaseController implements ILocationsController
{

	public function findLocationsByIndustryCode(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	) {
		$config = $this->model->findLocationsByIndustryCode($args['industry']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No suppliers from the selected industry found in your area.');
	}
}
