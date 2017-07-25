<?php

namespace GeoService\Base;

use Doctrine\ORM\EntityManager;

class BaseEntity extends EntityManager {

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
