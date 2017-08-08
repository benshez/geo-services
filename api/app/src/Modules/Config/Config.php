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
		$path = __DIR__ .'/../../../../config/environments/';
		$reader = new YamlConfig([\Symfony\Component\Yaml\Yaml::class, 'parse']);
		$mode = $reader->fromFile($path.'parameters.yaml');
		$config['settings'] = $reader->fromFile($path.$mode['mode'].'/parameters.yaml');
		return $config;
	}
}
