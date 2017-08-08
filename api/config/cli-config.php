<?php
require 'vendor/autoload.php';

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use GeoService\Modules\Config\Config;

$config = new \GeoService\Modules\Config\Config();
$parameters = $config->getConfig();
$isDevMode = ($parameters['settings']['mode'] == 'development');
// the connection configuration
$dbParameters = $parameters['settings']['doctrine']['connection'];

$config = Setup::createYAMLMetadataConfiguration(
	array(__DIR__.'/../mapping/yaml'),
	$isDevMode
);

$entityManager = EntityManager::create($dbParameters, $config);

return ConsoleRunner::createHelperSet($entityManager);
