<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

//$app->add( new \GeoService\Resources\Services\Authentication\Authorization() );

//$app->add(function($request, $response, $next) {

//    $response = $next($request, $response);

//    return $response->withHeader('Access-Control-Allow-Origin', $this->settings['cors']['origin'])
//      ->withHeader('Access-Control-Allow-Credentials', $this->settings['cors']['credentials'])
//      ->withHeader('Access-Control-Max-Age', $this->settings['cors']['cache'])
//      ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//      ->withHeader('Access-Control-Allow-Methods', $this->settings['cors']['methods']);
//});

$app->add(new \Tuupola\Middleware\Cors([    
    'origin' => ['chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop', 'http://localhost:5555'],
    'methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    'headers.allow' => ['Authorization', 'If-Match', 'If-Unmodified-Since'],
    'headers.expose' => ['Etag'],
    'credentials' => false,
    //'logger' => $container->logger,
    'cache' => 86400])
);