<?php

namespace GeoService\Industries\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Industries\Interfaces\IIndustriesModel;
use GeoService\Base\Model\BaseModel;

class Model extends BaseModel implements IIndustriesModel
{

	public function getClass()
	{
		return '\GeoService\Industries\Entity\Industries';
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

	public function autoComplete($description)
	{
		return parent::getEntityManager()
		->getRepository(\GeoService\Base\BaseConstants::$INDUSTRIES_ENTITY)
		->getAutoComplete($description);
	}
}
