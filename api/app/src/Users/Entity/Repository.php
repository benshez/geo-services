<?php

namespace GeoService\Users\Entity;

use Zend\Crypt\Password\Bcrypt;
use Doctrine\ORM\EntityRepository;

class Repository extends EntityRepository {
	/**
	* @var GeoService\Locations\Entity\Locations
	*
	* @ORM\ManyToMany(targetEntity="\GeoService\Locations\Entity\Locations", mappedBy="users")
	*/
	private $locations;

	public function __construct($em, $class) {
		parent::__construct($em, $class);
	}

	public function findOneBy(array $criteria, array $orderBy = null) {
		return parent::findOneBy($criteria, $orderBy);
	}

	// public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null) {
	// 	$qb = $this->_em->createQueryBuilder('u');
	// 	$qb->select('u.id')
	// 	->from(\GeoService\Base\BaseConstants::$USERS_ENTITY, 'u')
	// 	->where('u.industryId = :identifier')
	// 	->setParameter('identifier', $criteria['industryId']);

	// 	$query = $qb->getQuery();

	// 	return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
	// }
}