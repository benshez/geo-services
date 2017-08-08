<?php

namespace GeoService\Modules\Base\Entity;

use Doctrine\ORM\EntityRepository;
use GeoService\Modules\Base\Interfaces\IBaseEntity;
use GeoService\Modules\Base\Interfaces\IBaseModel;

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
