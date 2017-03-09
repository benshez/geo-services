<?php
// Routes

$app->get('/api/supplier/location', 'GeoService\Controller\SupplierLocationController:fetch');
$app->get('/api/supplier/location/{id}', 'GeoService\Controller\SupplierLocationController:fetchOne');

//$app->post('/api/photos', 'Eos\Controller\PhotoController:create');
//$app->get('/api/photos', 'Eos\Controller\PhotoController:fetch');
//$app->get('/api/photos/{slug}', 'Eos\Controller\PhotoController:fetchOne');
//$app->put('/api/photos/{id}', 'Eos\Controller\PhotoController:update');
//$app->delete('/api/photos/{id}', 'Eos\Controller\PhotoController:remove');