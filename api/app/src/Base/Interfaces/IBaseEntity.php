<?php

namespace GeoService\Base\Interfaces;

use Doctrine\ORM\EntityRepository;
use GeoService\Base\Interfaces\IBaseEntity;
use GeoService\Base\Interfaces\IBaseModel;

interface IBaseEntity
{
	public function __construct($manager, $class);

	public function findOneBy(array $criteria, array $orderBy = null);

	public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null);
}
