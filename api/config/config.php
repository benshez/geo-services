<?php
require 'vendor/autoload.php';

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;

$parser = new \Symfony\Component\Yaml\Parser();
$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.yaml'), 4);

$isDevMode = $parameters['parameters']['mode'] == 'development';
$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.'.$parameters['parameters']['mode'].'.yaml'), 4);

// the connection configuration
$dbParameters = $parameters['settings']['doctrine']['connection'];

$config = Setup::createYAMLMetadataConfiguration(
	array(__DIR__.'/../mapping/yaml'),
	$isDevMode
);

$entityManager = EntityManager::create($dbParameters, $config);

return ConsoleRunner::createHelperSet($entityManager);
