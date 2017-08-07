<?php

class GeoServiceConfig
{
	public function __construct()
	{ }

	public function getConfig()
	{
		$parser = new \Symfony\Component\Yaml\Parser();
		$parameters = $parser->parse(file_get_contents(__DIR__ . './environments/parameters.yaml'), 4);
		$settings = $parser->parse(file_get_contents(__DIR__ . './environments/parameters.'.$parameters['settings']['mode'].'.yaml'), 4);
		$merge['settings'] = array_merge($settings['settings'], $parameters['settings']);
		return $merge;
	}
}
