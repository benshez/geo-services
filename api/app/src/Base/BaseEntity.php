<?php

namespace GeoService\Base;

use GeoService\Base\BaseConstants;

abstract class BaseEntity extends BaseConstants {

	protected $error = false;
	protected $message = null;

	public function setError($message = null) {
		if ($message) {
			$this->error = true;
			$this->message = $message;
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
