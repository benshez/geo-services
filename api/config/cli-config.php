<?php
require 'vendor/autoload.php';

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;

$parser = new \Symfony\Component\Yaml\Parser();

// the connection configuration
$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.yaml'), 4);
$isDevMode = $parameters['parameters']['environment'] == 'development';
$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.'.$parameters['parameters']['environment'].'.yaml'), 4);
$dbParameters = $parameters['settings']['doctrine']['connection'];

$config = Setup::createYAMLMetadataConfiguration(
	array(__DIR__.'/../mapping/yaml'),
	$isDevMode
);

$entityManager = EntityManager::create($dbParameters, $config);

return ConsoleRunner::createHelperSet($entityManager);
