<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\EntityRepository;

class Repository extends EntityRepository {
	/**
		* @var GeoService\Users\Entity\Users
		*
		*/
	protected $user;

	/**
		* Get array copy of object
		*
		* @return array
		*/
	public function setUser(Users $user = null) {
		if ($user === null) {
			return false;
		}

		$this->user = $user->getArrayCopy();
	}

	public function getUserId() {
		return $this->userId;
	}
}
