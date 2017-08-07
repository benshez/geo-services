<?php

namespace GeoService\Base\Entity;

use Doctrine\ORM\EntityRepository;
use GeoService\Base\Interfaces\IBaseEntity;
use GeoService\Base\Interfaces\IBaseModel;

class BaseEntity extends EntityRepository implements IBaseEntity
{
	public function __construct($manager, $class)
	{
		parent::__construct($manager, $class);
	}

	public function findOneBy(array $criteria, array $orderBy = null)
	{
		return parent::findOneBy($criteria, $orderBy);
	}

	public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
	{
		return parent::findBy($criteria, $orderBy, $limit, $offset);
	}
}
