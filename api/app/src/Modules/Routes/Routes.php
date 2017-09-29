<?php

namespace GeoService\Modules\Routes;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Middleware\TokenAuthentication\TokenAuthentication as TokenAuthentication;

class Routes
{
    protected $app;

    protected $routes;

    public function __construct(\Slim\App $app, array $routes)
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
                    case 'PUT':
                        $this->createPutRoutes($route, $index);
                        break;
                    case 'DELETE':
                        $this->createDeleteRoutes($route, $index);
                        break;
                }
            }
        }
    }

    private function createGetRoutes($route, $index)
    {
        if ($route['middleware'][$index]) {
            $container = $this->app->getContainer();
            $middleware = $this->createMiddleware($container, $route, $index);
                
            $this->app->get(
                $route['pattern'][$index],
                $route['actions'][$index]
            )
            ->add(
                function (
                    $request,
                    $response,
                    $next
                ) use (
                    $container,
                    $middleware
                ) {
                    return $middleware(
                        $request,
                        $response,
                        $next
                    );
                }
            );
        } else {
            $this->app->get(
                $route['pattern'][$index],
                $route['actions'][$index]
            );
        }
    }

    private function createPostRoutes($route, $index)
    {
        if ($route['middleware'][$index]) {
            $container = $this->app->getContainer();
            $middleware = $this->createMiddleware($container, $route, $index);
            
            $this->app->post(
                $route['pattern'][$index],
                $route['actions'][$index]
            )
            ->add(
                function (
                    $request,
                    $response,
                    $next
                ) use (
                    $container,
                    $middleware
                ) {
                    return $middleware(
                        $request,
                        $response,
                        $next
                    );
                }
            );
        } else {
            $this->app->post(
                $route['pattern'][$index],
                $route['actions'][$index]
            );
        }
    }
    
    private function createPutRoutes($route, $index)
    {
        if ($route['middleware'][$index]) {
            $container = $this->app->getContainer();
            $middleware = $this->createMiddleware($container, $route, $index);
            
            $this->app->put(
                $route['pattern'][$index],
                $route['actions'][$index]
            )
            ->add(
                function (
                    $request,
                    $response,
                    $next
                ) use (
                    $container,
                    $middleware
                ) {
                    return $middleware(
                        $request,
                        $response,
                        $next
                    );
                }
            );
        } else {
            $this->app->put(
                $route['pattern'][$index],
                $route['actions'][$index]
            );
        }
    }
    
    private function createDeleteRoutes($route, $index)
    {
        if ($route['middleware'][$index]) {
            $container = $this->app->getContainer();
            $middleware = $this->createMiddleware($container, $route, $index);

            $this->app->delete(
                $route['pattern'][$index],
                $route['actions'][$index]
            )->add(
                function (
                    $request,
                    $response,
                    $next
                ) use (
                    $container,
                    $middleware
                ) {
                    return $middleware(
                        $request,
                        $response,
                        $next
                    );
                }
            );
        } else {
            $this->app->delete(
                $route['pattern'][$index],
                $route['actions'][$index]
            );
        }
    }
    
    private function createMiddleware($container, $route, $index)
    {
        $middleware = '';

        switch ($route['middleware'][$index]) {
            case 'TokenAuthentication':
                $middleware = [new TokenAuthentication($container, $route, $index), '__invoke'];
                break;
        }

        return $middleware;
    }
}
