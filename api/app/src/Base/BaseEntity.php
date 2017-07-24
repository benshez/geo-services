<?php

namespace GeoService\Base;

use GeoService\Base\BaseConstants;

class BaseEntity extends BaseConstants {

	public function __construct() { }

	/**
		* Get array copy of object
		*
		* @return array
		*/
	public function getArrayCopy() {
		return get_object_vars($this);
	}
}
