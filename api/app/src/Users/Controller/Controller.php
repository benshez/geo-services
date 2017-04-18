<?php

namespace GeoService\Users\Controller;

use Psr\Http\Message\ResponseInterface,
Psr\Http\Message\RequestInterface,
GeoService\Users\Manager\Manager;

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
      if ($config) return $response->withJSON($config);
      return $response->withStatus(404, 'No user found with that id.');
    }

    public function authenticateOne(RequestInterface $request, ResponseInterface $response, $args)
    {
      $config = $this->resource->authenticate($request->getParam('email'), $request->getParam('password'));
      if ($config) return $response->withJSON($config);
      return $response->withStatus(404, 'No user found with that id.');
    }
  }
}