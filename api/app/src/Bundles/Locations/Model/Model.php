<?php

namespace GeoService\Bundles\Locations\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Locations\Interfaces\ILocationsModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements ILocationsModel
{

	public function getClass()
	{
		return '\GeoService\Bundles\Industries\Entity\Industries';
	}

	public function getMessagePart()
	{
		return 'messages:validation:address:not_found';
	}

	public function setCriteria(array $criteria)
	{
		return $this->criteria = $criteria;
	}

	public function getCriteria()
	{
		return $this->criteria;
	}

	public function findLocationsByIndustryCode($industry)
	{
		// if (!$this->userIndustryCodeInput($industry)) {
		// 	return $this->validator->getMessagesAray();
		// }
		$location = parent::getEntityManager()
			->getRepository(\GeoService\Modules\Base\BaseConstants::$LOCATIONS_ENTITY)
			->findBy(array(\GeoService\Modules\Base\BaseConstants::$FIND_USERS_BY_INDUSTRY => $industry));

		return $location;
	}

	private function userIndustryCodeInput($industry)
	{
		$this->setValidator();
		$this->validator->validateIndustryCodeInput($industry);
		return $this->validator->isValid($industry);
	}
}