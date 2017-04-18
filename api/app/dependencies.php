<?php
// DI Configuration
$container = $app->getContainer();

// -----------------------------------------------------------------------------
// Service factories
// -----------------------------------------------------------------------------

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings');
    $logger = new \Monolog\Logger($settings['logger']['name']);
    $logger->pushProcessor(new \Monolog\Processor\UidProcessor());
    $logger->pushHandler(new \Monolog\Handler\StreamHandler($settings['logger']['path'], \Monolog\Logger::DEBUG));
    return $logger;
};

//Slim CSRF
$container['csrf'] = function ($c) {
    $guard = new \Slim\Csrf\Guard();
    $guard->setFailureCallable(function ($request, $response, $next) {
        $request = $request->withAttribute("csrf_status", false);
        return $next($request, $response);
    });
    return $guard;
};

// Doctrine
$container['em'] = function ($c) {
    $settings = $c->get('settings');
    $config = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration(
        $settings['doctrine']['meta']['entity_path'],
        $settings['doctrine']['meta']['auto_generate_proxies'],
        $settings['doctrine']['meta']['proxy_dir'],
        $settings['doctrine']['meta']['cache'],
        false
    );
    
    return \Doctrine\ORM\EntityManager::create($settings['doctrine']['connection'], $config);
};

//Authentication
$container['auth'] = function ($c) {
    return [
      'factories' => [
        'Zend\Authentication\AuthenticationService' => function ($c) {
            return $c->get('settings')['doctrine']['authentication']['orm_default'];
        },
      ],
    ];
};

// -----------------------------------------------------------------------------
// Action factories
// -----------------------------------------------------------------------------
$container['GeoService\Users\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Users\Manager\Manager($c);
    return new GeoService\Users\Controller\Controller($resource);
};

$container['GeoService\Locations\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Locations\Manager\Manager($c);
    return new GeoService\Locations\Controller\Controller($resource);
};