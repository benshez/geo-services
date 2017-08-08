<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Set up config
$config = new \GeoService\Modules\Config\Config();

$app = new \Slim\App($config->getConfig());

// Set up dependencies
require_once 'dependencies.php';

// Register middleware
require_once 'middleware.php';

// Register routes
require_once 'routes.php';

$app->run();
