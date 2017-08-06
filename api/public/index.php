<?php
//phpinfo();

// To help the built-in PHP dev server, check if the request was actually for
// something which should probably be served as a static file
if (PHP_SAPI === 'cli-server' && $_SERVER['SCRIPT_FILENAME'] !== __FILE__) {
	return false;
}

require __DIR__ . '/../vendor/autoload.php';

// session_start();	

// Instantiate the app

$parser = new \Symfony\Component\Yaml\Parser();

$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.yaml'), 4);

$settings = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.'.$parameters['settings']['mode'].'.yaml'), 4);

$merge['settings'] = array_merge($settings['settings'], $parameters['settings']);

$app = new \Slim\App($merge);

// Set up dependencies
require __DIR__ . '/../app/dependencies.php';

// Register middleware
require __DIR__ . '/../app/middleware.php';

// Register routes
require __DIR__ . '/../app/routes.php';

// Run!
$app->run();
