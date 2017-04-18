<?php

namespace GeoService\Locations\Controller;

use Psr\Http\Message\ResponseInterface,
Psr\Http\Message\RequestInterface,
GeoService\Locations\Manager\Manager;

{
	final class Controller
	{
    private $resource;

    public function __construct(Manager $resource)
    {
      $this->resource = $resource;
    }

    public function fetch(RequestInterface $request, ResponseInterface $response, $args)
    {
      $configs = $this->resource->get(); 
      return $response->withJSON($configs);
    }

    public function fetchOne(RequestInterface $request, ResponseInterface $response, $args)
    {
      $config = $this->resource->get($args['id']);
      if ($config) {
        return $response->withJSON($config);
      }
      return $response->withStatus(404, 'No suppliers found with that slug.');
    }
  }
}