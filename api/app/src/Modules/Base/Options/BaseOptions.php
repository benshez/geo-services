<?php

namespace GeoService\Modules\Base\Options;

use GeoService\Modules\Base\Interfaces\IBaseOptions;

class BaseOptions implements IBaseOptions
{
	protected $options = array('part' => '', 'class' => '', 'extention' => '');

    public function __construct(array $options)
    {
		$this->setOptions($options);
	}
	
	public function setOptions(array $options)
	{
		$this->options = array_merge($this->options, $options);
	}

	public function getOptions(String $option)
	{
		return $this->options[$option];
	}
}
