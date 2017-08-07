<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Set up config
require_once __DIR__ . '/../config/config.php';

$config = new GeoServiceConfig();

$settings = $config->getConfig();

$app = new \Slim\App($settings);

// Set up dependencies
require_once 'dependencies.php';

// Register middleware
require_once 'middleware.php';

// Register routes
require_once 'routes.php';

$app->run();
