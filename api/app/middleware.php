<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

//$app->add( new \GeoService\Resources\Services\Authentication\Authorization() );

$app->add(new \Tuupola\Middleware\Cors([    
    'origin' => ['chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop', 'http://localhost:5555'],
    'methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'REQUEST'],
    //'headers.allow' => ['Authorization', 'If-Match', 'If-Unmodified-Since'],
    'headers.allow' => ['X-Requested-With', 'Content-Type', 'Accept', 'Origin', 'Authorization'],
    'headers.expose' => [],
    'credentials' => false,
    //'logger' => $container->logger,
    'cache' => 86400])
);