<?php

namespace GeoService\Industries\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Industries\Manager\Manager;

{
final class Controller
{
	private $resource;

	public function __construct(Manager $resource) {
		$this->resource = $resource;
	}

	public function fetch(RequestInterface $request, ResponseInterface $response, $args) {
		$configs = $this->resource->get();

		return $response->withJSON($configs);
	}

	public function fetchOne(RequestInterface $request, ResponseInterface $response, $args) {
		$config = $this->resource->get($args['id']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No industries found with that slug.');
	}
	
	public function autoComplete(RequestInterface $request, ResponseInterface $response, $args) {
		$config = $this->resource->autoComplete($args['description']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No industries found with that description.');
	}
}
}
