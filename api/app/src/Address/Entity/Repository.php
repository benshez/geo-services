<?php

namespace GeoService\Address\Entity;

use Doctrine\ORM\EntityRepository;

class Repository extends EntityRepository {

	private $user;

	/**
		* Get array copy of object
		*
		* @return array
		*/
	public function getArrayCopy() {
		return get_object_vars($this);
	}

	public function getSupplierId() {
		return $this->supplierId;
	}

	public function setSupplier(Users $user = null) {
			$this->user = $user->getArrayCopy();
	}
}
