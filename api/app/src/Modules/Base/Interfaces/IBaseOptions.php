<?php

namespace GeoService\Modules\Base\Interfaces;

interface IBaseOptions
{
	public function __construct(array $options);
	public function setOptions(array $options);
	public function getOptions(String $option);
}
