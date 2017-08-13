<?php

namespace GeoService\Bundles\Suppliers\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Suppliers\Interfaces\ISuppliersModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements ISuppliersModel
{

	public function getClass()
	{
		return '\GeoService\Bundles\Suppliers\Entity\Suppliers';
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
		->getRepository(\GeoService\Modules\Base\BaseConstants::$INDUSTRIES_ENTITY)
		->getAutoComplete($description);
	}
}
