<?php

namespace GeoService\Bundles\Locations\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Query\Expr\Join;
use \Doctrine\Orm\NoResultException;

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
		$date = new \DateTime();

		$qb = $this->_em->createQueryBuilder();
		$qb->select('loc.latitude, loc.longitude, usr.username, usr.usersurname, usr.email, usr.logo, usr.about, usr.website, usr.facebook, usr.twitter, ind.description')
		->from(\GeoService\Modules\Base\BaseConstants::$USERS_ENTITY, 'usr')
		->innerJoin(\GeoService\Modules\Base\BaseConstants::$LOCATIONS_ENTITY, 'loc', Join::WITH, '(loc.user = usr.id)')
		->innerJoin(\GeoService\Modules\Base\BaseConstants::$INDUSTRIES_ENTITY, 'ind', Join::WITH, '(usr.industry = ind.id)')
		->where('usr.industry = :identifier')
		->andWhere('usr.expiresAt >= :expires')
		->andWhere('usr.enabled = 1')
		->setParameter('identifier', $criteria['industryId'])
		->setParameter('expires', '\'' . $date->format('Y-m-d') . '\'');

		$query = $qb->getQuery();

		try {
			return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
		} catch (NoResultException $e) {
			return false;
		}
	}
}
