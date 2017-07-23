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

	public function getArrayCopy() {
		return get_object_vars($this);
	}

	public function getAndAuthenticateUser(User $user) {
		//$this->user = $this->getUserToAuthenticate($email, $password);
		//$this->user = $this->_em->getRepository(Users::class)->findOneBy(array(\GeoService\Base\BaseConstants::$FIND_BY_ONE_KEY_EMAIL => $email));
		// $this->user = $this->_em->merge($this->_em->getRepository(Users::class)->findOneBy(array(\GeoService\Base\BaseConstants::$FIND_BY_ONE_KEY_EMAIL => $email)));
		// if ($this->user == null) {
		// 	return array('error' => \GeoService\Base\BaseConstants::$USER_CREDENTIALS_INVALID);
		// }

		$bcrypt = ($user->salt) ? new Bcrypt(array(
				'salt' => $user->salt,
				'cost' => 10
		)) : new Bcrypt();

		$passwordHash = $user>password;

		if ($bcrypt->verify($password, $passwordHazsh)) {
			return parent::getArrayCopy();
		}

		return array('error' => \GeoService\Base\BaseConstants::$USER_CREDENTIALS_INVALID);
	}
}
