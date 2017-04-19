<?php
//phpinfo();
//header('Access-Control-Allow-Credentials: true');
//header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
//header('Access-Control-Max-Age: 1000');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
//$_SERVER['HTTP_X_REQUESTED_WITH'] = 'xmlhttprequest';

// To help the built-in PHP dev server, check if the request was actually for
// something which should probably be served as a static file
if (PHP_SAPI === 'cli-server' && $_SERVER['SCRIPT_FILENAME'] !== __FILE__) {
    return false;
}

require __DIR__ . '/../vendor/autoload.php';

//// session_start();

//// Instantiate the app
//$settings = require __DIR__ . '/../app/settings.php';

$settings = require __DIR__ . '/../config/module.config.php';

$app = new \Slim\App($settings);

//header('Access-Control-Allow-Origin: ' . $settings['settings']['cors']['origin']); 

// Set up dependencies
require __DIR__ . '/../app/dependencies.php';

// Register middleware
require __DIR__ . '/../app/middleware.php';

// Register routes
require __DIR__ . '/../app/routes.php';

// Run!
$app->run();