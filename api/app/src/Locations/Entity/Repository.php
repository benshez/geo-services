<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\Common\Collections\ArrayCollection;

class Repository extends EntityRepository {
	/**
		* @var GeoService\Users\Entity\Users
		*
		* @ORM\ManyToMany(targetEntity="\GeoService\Users\Entity\Users", inversedBy="locations")
		*/
	protected $users;

	public function __construct($em, $class) {
		parent::__construct($em, $class);
		$this->users = new ArrayCollection();
	}

	public function findOneBy(array $criteria, array $orderBy = null) {
		return parent::findOneBy($criteria, $orderBy);
	}

	/**
		* Get array copy of object
		*
		* @return array
		*/

	// public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null) {
	// 	$qb = $this->_em->createQueryBuilder('u');
	// 	$qb->select('u.latitude, u.longitude')
	// 	->from(\GeoService\Base\BaseConstants::$LOCATIONS_ENTITY, 'u')
	// 	->where('u.userId IN (:identifier)')
	// 	->setParameter('identifier', $criteria['userId']);

	// 	$query = $qb->getQuery();

	// 	return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
	// }

	public function setUser(Users $user = null) {
		if ($user === null) {
			return false;
		}

		$this->user = $user->getArrayCopy();
	}

	public function getUserId() {
		return $this->userId;
	}
}
