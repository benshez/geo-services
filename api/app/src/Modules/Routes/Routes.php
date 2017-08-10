<?php

namespace GeoService\Modules\Routes;

use Interop\Container\ContainerInterface;

class Routes
{
	protected $app;

	protected $routes;

	public function __construct($app, array $routes)
	{
		$this->routes = $routes;
		$this->app = $app;
		$this->createRoutes();
	}

	private function createRoutes()
	{
		foreach ($this->routes as $route) {
			foreach ($route['methods'] as $index => $method) {
				switch ($method) {
					case 'GET':
						$this->createGetRoutes($route, $index);
						break;
					case 'POST':
						$this->createPostRoutes($route, $index);
						break;
				}
			}
		}
	}

	private function createGetRoutes($route, $index)
	{
		if ($route['middleware']) {
			$container = $this->app->getContainer();
			$middleware = $container[$route['middleware'][$index]];

			$this->app->get($route['pattern'], $route['actions'][$index])
				->add(function ($request, $response, $next) use ($container, $middleware) {
					return $middleware($request, $response, $next);
				});
		} else {
			$this->app->get($route['pattern'], $route['actions'][$index]);
		}
	}

	private function createPostRoutes($route, $index)
	{
		if ($route['middleware']) {
			$container = $this->app->getContainer();
			$middleware = $container[$route['middleware'][$index]];

			$this->app->post($route['pattern'], $route['actions'][$index])
				->add(function ($request, $response, $next) use ($container, $middleware) {
					return $middleware($request, $response, $next);
				});
		} else {
			$this->app->post($route['pattern'], $route['actions'][$index]);
		}
	}
}
