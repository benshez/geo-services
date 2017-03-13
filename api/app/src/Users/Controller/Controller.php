<?php

namespace GeoService\Users\Controller;

use GeoService\Users\Manager\Manager;

{
	final class Controller
	{
    private $resource;

    protected function __construct(Manager $resource)
    {
      $this->resource = $resource;
    }

    protected function fetch($request, $response, $args)
    {
      $configs = $this->resource->get(); 
      return $response->withJSON($configs);
    }

    protected function fetchOne($request, $response, $args)
    {
      $config = $this->resource->get($args['id']);
      if ($config) {
        return $response->withJSON($config);
      }
      return $response->withStatus(404, 'No suppliers found with that slug.');
    }

    protected function loginUser($request, $response, $args)
    {
    }
  }
}