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
      $body = ($request->getParsedBody());
      //$body = json_decode(file_get_contents('php://input'), true);
      //$body = (json_decode(file_get_contents("php://input")));
      //print_r($body);
      //return $response->withJSON(array('body'=> $body, 'email' => $body['email'], 'password' => $body['password']));
      $config = $this->resource->authenticate($body['email'], $body['password']);
      if ($config) return $response->withJSON($config);
      return $response->withStatus(404, 'No user found with that id.');
    }
  }
}