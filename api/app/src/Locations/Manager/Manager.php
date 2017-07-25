<?php

namespace GeoService\Locations\Manager;

use GeoService\Base\BaseResource;
use GeoService\Locations\Entity\Locations;
use GeoService\Users\Entity\Users;
use GeoService\Locations\Validation\Validation;

class Manager extends BaseResource {
	
	public function fetchAllByIndustryCode($industry) {
		if (!$this->userIndustryCodeInput($industry)) {
			return $this->validator->getMessagesAray();
		}
		$ad = $this->get(\GeoService\Base\BaseConstants::$LOCATIONS_ENTITY, array(\GeoService\Base\BaseConstants::$FIND_LOCATIONS_BY_USERS => 1));
		$adx = $ad->get;
		//$userIds = $this->findAllBy(\GeoService\Base\BaseConstants::$USERS_ENTITY, array(\GeoService\Base\BaseConstants::$FIND_USERS_BY_INDUSTRY => $industry));
		//$locations = $this->findAllBy(\GeoService\Base\BaseConstants::$LOCATIONS_ENTITY, array(\GeoService\Base\BaseConstants::$FIND_LOCATIONS_BY_USERS => $userIds));
	}

	private function userIndustryCodeInput($industry) {
		$this->validator = new Validation();
		$this->validator->validateIndustryCodeInput($industry);
		return $this->validator->isValid($industry);
	}
}
