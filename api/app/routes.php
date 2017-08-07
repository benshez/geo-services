<?php
// Routes

$app->get('/api/user/login/{email}', 'GeoService\Locations\Controller\Controller:fetchOne');
$app->get('/api/address/{id}', 'GeoService\Address\Controller\Controller:fetchOne');
$app->post('/api/user/login', 'GeoService\Users\Controller\Controller:authenticateOne');
$app->get('/api/industries/{description}', 'GeoService\Industries\Controller\Controller:autoComplete');
$app->get('/api/location/{industry}', 'GeoService\Locations\Controller\Controller:findLocationsByIndustryCode');
$app->get('/api/roles/{id}', 'GeoService\Locations\Controller\Controller:fetch');
//$app->get('/api/industries/description', function ($request, $response, $args) {
//    echo $args['description'];
//});
//$app->post('/api/photos', 'Eos\Controller\PhotoController:create');
//$app->get('/api/photos', 'Eos\Controller\PhotoController:fetch');
//$app->get('/api/photos/{slug}', 'Eos\Controller\PhotoController:fetchOne');
//$app->put('/api/photos/{id}', 'Eos\Controller\PhotoController:update');
//$app->delete('/api/photos/{id}', 'Eos\Controller\PhotoController:remove');
