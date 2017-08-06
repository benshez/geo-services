<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

//$app->add( new \GeoService\Resources\Services\Authentication\Authorization() );

$app->add(new \Tuupola\Middleware\Cors(
	$settings['settings']['cors']
));
