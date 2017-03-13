<?php

namespace GeoService\Address\Controller;

use GeoService\Address\Manager\Manager;

{
	final class Controller
	{
    private $resource;

    public function __construct(Manager $resource)
    {
      $this->resource = $resource;
    }

    public function fetch($request, $response, $args)
    {
      $configs = $this->resource->get(); 
      return $response->withJSON($configs);
    }

    public function fetchOne($request, $response, $args)
    {
      $config = $this->resource->get($args['id']);
      if ($config) {
        return $response->withJSON($config);
      }
      return $response->withStatus(404, 'No suppliers found with that slug.');
    }
  }
}