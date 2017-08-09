<?php

namespace GeoService\Modules\Config;

use Symfony\Component\Yaml\Yaml as SymfonyYaml;
use Zend\Config\Factory;
use Zend\Config\Reader\Yaml as YamlConfig;

class Config
{
	protected $path = __DIR__ .'/../../../../config/environments/';

	public function __construct()
	{ }

	public function getConfig()
	{
		$path = __DIR__ .'/../../../../config/environments/';
		$reader = new YamlConfig([\Symfony\Component\Yaml\Yaml::class, 'parse']);
		$mode = $reader->fromFile($this->path.'parameters.yaml');
		$config['settings'] = $reader->fromFile($this->path.$mode['mode'].'/parameters.yaml');
		return $config;
	}
}
