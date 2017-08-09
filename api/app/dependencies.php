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

$container['mailer'] = function ($c) {
	$settings = $c->get('settings');
	
	$mailer = new PHPMailer;

	$mailer->Host = 'your.host.com';
	$mailer->SMTPAuth = true;
	$mailer->SMTPSecure = 'ssl';
	$mailer->Port = '';
	$mailer->Username = 'your@email.address';
	$mailer->isHTML(true);

	return new \GeoService\Application\Mailer($c->view, $mailer);
};

$container['TokenAuthentication'] = function ($c) {
    return function ($request, $response, $next) use ($c) {
        $settings = $c['settings'];
        return $next($request, $response);
    };
};
// -----------------------------------------------------------------------------
// Action factories
// -----------------------------------------------------------------------------
$container['GeoService\Bundles\Users\Controller\Controller'] = function ($c) {
		$resource = new \GeoService\Bundles\Users\Model\Model($c);
		return new GeoService\Bundles\Users\Controller\Controller($resource);
};

$container['GeoService\Bundles\Address\Controller\Controller'] = function ($c) {
		$resource = new \GeoService\Bundles\Address\Model\Model($c);
		return new GeoService\Bundles\Address\Controller\Controller($resource);
};

$container['GeoService\Bundles\Industries\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Bundles\Industries\Model\Model($c);
	return new GeoService\Bundles\Industries\Controller\Controller($resource);
};

$container['GeoService\Bundles\Locations\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Bundles\Locations\Model\Model($c);
	return new GeoService\Bundles\Locations\Controller\Controller($resource);
};

$container['GeoService\Bundles\Roles\Controller\Controller'] = function ($c) {
	$resource = new \GeoService\Bundles\Roles\Model\Model($c);
	return new GeoService\Bundles\Roles\Controller\Controller($resource);
};
