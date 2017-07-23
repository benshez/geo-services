<?php
namespace GeoService\Base;

use Doctrine\ORM\EntityManager;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;

abstract class BaseController {

	protected $manager = null;

	public function fetch(RequestInterface $request, ResponseInterface $response, $args) {
		$configs = $this->manager->get();
		return $response->withJSON($configs);
	}

	public function fetchOne(RequestInterface $request, ResponseInterface $response, $args) {
		$config = $this->manager->get($args['id']);

		if ($config) {
			return $response->withJSON($config);
		}

		return $response->withStatus(404, 'No suppliers found with that slug.');
	}
}
