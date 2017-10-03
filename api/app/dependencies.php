<?php
// DI Configuration
$container = $app->getContainer();

// -----------------------------------------------------------------------------
// Service factories
// -----------------------------------------------------------------------------

//Slim app
$container['slim'] = function ($c) {
    global $app;
    return $app;
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings');
    
    $logger = new \Monolog\Logger($settings['logger']['name']);
    $logger->pushProcessor(new \Monolog\Processor\UidProcessor());
    $logger->pushHandler(
        new \Monolog\Handler\StreamHandler(
            $settings['logger']['path'],
            \Monolog\Logger::DEBUG
        )
    );
    
    return $logger;
};

//Slim CSRF
$container['csrf'] = function ($c) {
    $guard = new \Slim\Csrf\Guard();

    $guard->setFailureCallable(
        function (
            $request,
            $response,
            $next
        ) {
            $request = $request->withAttribute("csrf_status", false);
            return $next($request, $response);
        }
    );
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
    $em = \Doctrine\ORM\EntityManager::create(
        $settings['doctrine']['connection'],
        $config
    );
    return $em;
};

$container['bundles'] = function ($c) {
    $settings = $c->get('settings');

    $isDevMode = ($settings['mode'] == 'development');

    if ($isDevMode) {
        $bundles[] = new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle();
    }
    
    return $bundles;
};

//Mailer
$container['mailer'] = function ($c) {
    $settings = $c->get('settings');
    
    $mailer = new PHPMailer;

    $mailer->Host = 'your.host.com';
    $mailer->SMTPAuth = true;
    $mailer->SMTPSecure = 'ssl';
    $mailer->Port = '';
    $mailer->Username = 'your@email.address';
    $mailer->isHTML(true);

    return new \GeoService\Modules\Mailer\Mailer($c->view, $mailer);
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
    $resource = new \GeoService\Bundles\Users\Actions\Action($c);
    $users = new GeoService\Bundles\Users\Controller\Controller($resource);
    return $users;
};

$container['GeoService\Bundles\Address\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Bundles\Address\Actions\Action($c);
    $address = new GeoService\Bundles\Address\Controller\Controller($resource);
    return $address;
};

$container['GeoService\Bundles\Industries\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Bundles\Industries\Actions\Action($c);
    $industries = new GeoService\Bundles\Industries\Controller\Controller($resource);
    return $industries;
};

$container['GeoService\Bundles\Locations\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Bundles\Locations\Actions\Action($c);
    $locations = new GeoService\Bundles\Locations\Controller\Controller($resource);
    return $locations;
};

$container['GeoService\Bundles\Roles\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Bundles\Roles\Actions\Action($c);
    $roles = new GeoService\Bundles\Roles\Controller\Controller($resource);
    return $roles;
};

$container['GeoService\Bundles\Contact\Controller\Controller'] = function ($c) {
    $resource = new \GeoService\Bundles\Contact\Actions\Action($c);
    $contact = new GeoService\Bundles\Contact\Controller\Controller($resource);
    return $contact;
};
