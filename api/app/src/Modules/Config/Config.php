<?php

namespace GeoService\Modules\Config;

use Symfony\Component\Yaml\Yaml as SymfonyYaml;
use Zend\Config\Factory;
use Zend\Config\Reader\Yaml as YamlConfig;

class Config
{
	public function __construct()
	{ }

	public function getConfig()
	{
		$reader = new YamlConfig([\Symfony\Component\Yaml\Yaml::class, 'parse']);
		$mode = $reader->fromFile(__DIR__ . './environments/parameters.yaml');

		$parser = new \Symfony\Component\Yaml\Parser();
		$parameters = $parser->parse(file_get_contents(__DIR__ . './environments/parameters.yaml'), 4);
		$settings = $parser->parse(file_get_contents(__DIR__ . './environments/parameters.'.$parameters['settings']['mode'].'.yaml'), 4);
		$config = $reader->fromFile(__DIR__ . '/environments/'.$parameters['settings']['mode'].'/parameters.yaml');
		$merge['settings'] = array_merge($settings['settings'], $parameters['settings']);
		return $merge;
	}
}
