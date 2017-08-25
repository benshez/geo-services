<?php

namespace GeoService\Bundles\Locations\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Orm\NoResultException;
use GeoService\Modules\Base\BaseConstants;

class Repository extends EntityRepository
{
    protected $criteria;
    protected $orderBy;

    public function __construct($em, $class)
    {
        parent::__construct($em, $class);
    }

    public function findOneBy(array $criteria, array $orderBy = null)
    {
        $this->criteria = $criteria['industryId'];
        $this->orderBy = $orderBy;

        $query = $this->getQuery();

        try {
            return $query->getResult(Query::HYDRATE_ARRAY);
        } catch (NoResultException $e) {
            return false;
        }
    }

    private function getQuery()
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select($this->getSelectStatement())
        ->from(BaseConstants::USERS_ENTITY, 'users')
        ->innerJoin(BaseConstants::LOCATIONS_ENTITY, 'locations', Join::WITH, '(locations.user = users.id)')
        ->innerJoin(BaseConstants::CONTACT_ENTITY, 'contact', Join::WITH, '(contact.user = users.id)')
        ->innerJoin(BaseConstants::INDUSTRIES_ENTITY, 'industries', Join::WITH, '(users.industry = industries.id)')
        ->where('industries.id = :identifier')
        ->andWhere('users.enabled = 1')
        ->andWhere('users.expiresAt >= :expires')
        ->setParameter('identifier', $this->criteria)
        ->setParameter('expires', $this->getFormattedDate());

        return $qb->getQuery();
    }

    private function getFormattedDate()
    {
        $date = new \DateTime();
        return '\'' . $date->format('Y-m-d') . '\'';
    }

    private function getSelectStatement()
    {
        $statement = 'locations.latitude, locations.longitude, users.username, contact.phone,';
        $statement .= 'users.logo, contact.email, contact.website, contact.facebook, contact.twitter';

        return $statement;
    }
}
