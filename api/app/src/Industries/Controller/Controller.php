<?php

namespace GeoService\Industries\Controller;

use GeoService\Base\Controller\BaseController;
use GeoService\Industries\Interfaces\IIndustriesController;

class Controller extends BaseController implements IIndustriesController
{
	
	public function autoComplete(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	) {
		$config = $this->model->autoComplete($args['description']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No industries found with that description.');
	}
}
