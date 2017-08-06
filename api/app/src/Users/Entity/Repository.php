<?php

namespace GeoService\Users\Entity;

use Zend\Crypt\Password\Bcrypt;
use Doctrine\ORM\EntityRepository;
use Doctrine\Common\Collections\ArrayCollection;

class Repository extends EntityRepository
{

	public function __construct($em, $class)
	{
		parent::__construct($em, $class);
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
