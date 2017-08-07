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
	
	$isDevMode = ($settings['mode'] == 'development');

	$config = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration(
		$settings['doctrine']['meta']['entity_path'],
		$isDevMode,
		$settings['doctrine']['meta']['proxy_dir'],
		$settings['doctrine']['meta']['cache'],
		$settings['useSimpleAnnotationReader']
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
		$resource = new \GeoService\Users\Model\Model($c);
		return new GeoService\Users\Controller\Controller($resource);
};

$container['GeoService\Address\Controller\Controller'] = function ($c) {
		$resource = new \GeoService\Address\Model\Model($c);
		return new GeoService\Address\Controller\Controller($resource);
};

$container['GeoService\Industries\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Industries\Model\Model($c);
	return new GeoService\Industries\Controller\Controller($resource);
};

$container['GeoService\Locations\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Locations\Model\Model($c);
	return new GeoService\Locations\Controller\Controller($resource);
};

$container['GeoService\Roles\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Roles\Model\Model($c);
	return new GeoService\Roles\Controller\Controller($resource);
};
