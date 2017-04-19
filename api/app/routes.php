<?php
// Routes

$app->get('/api/location/users', 'GeoService\Locations\Controller\Controller:fetch');
$app->get('/api/user/login/{email}', 'GeoService\Locations\Controller\Controller:fetchOne');
$app->post('/api/user/login', 'GeoService\Users\Controller\Controller:authenticateOne');


//$app->post('/api/photos', 'Eos\Controller\PhotoController:create');
//$app->get('/api/photos', 'Eos\Controller\PhotoController:fetch');
//$app->get('/api/photos/{slug}', 'Eos\Controller\PhotoController:fetchOne');
//$app->put('/api/photos/{id}', 'Eos\Controller\PhotoController:update');
//$app->delete('/api/photos/{id}', 'Eos\Controller\PhotoController:remove');