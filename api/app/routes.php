<?php
// Routes

$app->get('/api/user/login/{email}', 'GeoService\Bundles\Locations\Controller\Controller:fetchOne');
$app->get('/api/v1/address/{token}/{id}', 'GeoService\Bundles\Address\Controller\Controller:fetchOne')->add(function ($request, $response, $next) use ($container) {
    $middlware = $container['TokenAuthentication'];
    return $middlware($request, $response, $next);
});
$app->post('/api/user/login', 'GeoService\Bundles\Users\Controller\Controller:authenticateOne');
$app->get('/api/industries/{description}', 'GeoService\Bundles\Industries\Controller\Controller:autoComplete');
$app->get('/api/location/{industry}', 'GeoService\Bundles\Locations\Controller\Controller:findLocationsByIndustryCode');
$app->get('/api/roles/{id}', 'GeoService\Bundles\Locations\Controller\Controller:fetch');
//$app->get('/api/industries/description', function ($request, $response, $args) {
//    echo $args['description'];
//});
//$app->post('/api/photos', 'Eos\Controller\PhotoController:create');
//$app->get('/api/photos', 'Eos\Controller\PhotoController:fetch');
//$app->get('/api/photos/{slug}', 'Eos\Controller\PhotoController:fetchOne');
//$app->put('/api/photos/{id}', 'Eos\Controller\PhotoController:update');
//$app->delete('/api/photos/{id}', 'Eos\Controller\PhotoController:remove');
