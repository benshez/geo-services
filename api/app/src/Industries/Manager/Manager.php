<?php

namespace GeoService\Industries\Manager;

use GeoService\Industries\Entity\Industries;
use GeoService\Base\BaseResource;

class Manager extends BaseResource {

	public function autoComplete($description = null) {
		return $this->entityManager
		->getRepository(Industries::class)
		->getAutoComplete($description);
	}
}
