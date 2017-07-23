<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

require 'vendor/autoload.php';

$parser = new \Symfony\Component\Yaml\Parser();

$parameters = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.yaml'), 4);
$settings = $parser->parse(file_get_contents(__DIR__ . '/../config/environments/parameters.'.$parameters['parameters']['environment'].'.yaml'), 4);
//$settings = include 'app/settings.php';
//$settings = $settings['settings']['doctrine'];

$config = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration(
    $settings['meta']['entity_path'],
    $settings['meta']['auto_generate_proxies'],
    $settings['meta']['proxy_dir'],
    $settings['meta']['cache'],
    false
);

$em = \Doctrine\ORM\EntityManager::create($settings['connection'], $config);

return ConsoleRunner::createHelperSet($em);
