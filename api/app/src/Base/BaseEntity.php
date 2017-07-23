<?php

namespace GeoService\Base;

use GeoService\Base\BaseConstants;

class BaseEntity extends BaseConstants {

	protected $error = array();

	public function __construct() {
		$this->error = array();
	}

	public function createErrorAray($error = null) {
		if ($error) {
			$this->error = array('error' => true,  'message' => $error);
			return $this->error;
		}
	}

	/**
		* Get array copy of object
		*
		* @return array
		*/
	public function getArrayCopy() {
		return get_object_vars($this);
	}
}
