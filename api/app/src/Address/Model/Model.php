<?php

namespace GeoService\Address\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Address\Interfaces\IAddressModel;
use GeoService\Base\Model\BaseModel;

class Model extends BaseModel implements IAddressModel
{

	public function getClass()
	{
		return '\GeoService\Address\Entity\Address';
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
}
