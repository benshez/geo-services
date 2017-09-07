<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Set up config

$config = new \GeoService\Modules\Config\Config();

$settings = $config->getConfig();

$app = new \Slim\App($settings);



// Set up dependencies
require_once 'dependencies.php';

// Register middleware
require_once 'middleware.php';

// Register routes
new \GeoService\Modules\Routes\Routes($app, $settings['settings']['routes']);

$app->run();
