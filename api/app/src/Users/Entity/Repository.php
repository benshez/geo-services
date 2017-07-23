<?php

namespace GeoService\Users\Entity;

use Zend\Crypt\Password\Bcrypt;
use GeoService\Users\Entity\Users;

class Repository extends Users {
	/**
		* @var GeoService\Users\Entity\Users
		*
		*/
	protected $user;

	public function findOneBy(array $criteria, array $orderBy = null) {
		$qb = $this->_em->createQueryBuilder('u');
		$qb->select('u.email, u.username, u.salt')
		->from(Users::class, 'u')
		->where('u.email = :identifier')
		->setParameter('identifier', $criteria->$email);

		$query = $qb->getQuery();

		return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
	}
}
