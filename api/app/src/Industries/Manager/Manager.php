<?php

namespace GeoService\Industries\Manager;

use GeoService\Industries\Entity\Industries;
use GeoService\Base\BaseResource;

class Manager extends BaseResource
{

	public function autoComplete($description)
	{
		return $this->entityManager
		->getRepository(\GeoService\Base\BaseConstants::$INDUSTRIES_ENTITY)
		->getAutoComplete($description);
	}
}
