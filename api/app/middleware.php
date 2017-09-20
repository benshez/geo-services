<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

//$app->add( new \GeoService\Resources\Services\Authentication\Authorization() );
$container = $app->getContainer();

$app->add(new \Tuupola\Middleware\Cors(
    $settings['settings']['cors']
));

//$app->add(new \GeoService\Modules\Middleware\TokenAuthentication\TokenAuthentication($container));
