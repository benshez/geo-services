<?php

namespace GeoService\Bundles\Locations\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\ORM\NoResultException;
use GeoService\Modules\Base\Entity\BaseEntity;
use GeoService\Bundles\Users\Entity\Users;
use GeoService\Bundles\Industries\Entity\Industries;
use GeoService\Bundles\Locations\Entity\Locations;
use GeoService\Bundles\Contact\Entity\Contact;

class Repository extends BaseEntity
{
    public function findOneBy(array $criteria, array $orderBy = null)
    {
        $query = $this->getQuery($criteria['industry']['industry'], $orderBy);

        try {
            return $query->getResult(Query::HYDRATE_ARRAY);
        } catch (NoResultException $e) {
            return false;
        }
    }

    private function getQuery($criteria, array $orderBy = null)
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select($this->getSelectStatement())
        ->from(Users::class, 'users')
        ->innerJoin(Locations::class, 'locations', Join::WITH, '(locations.user = users.id)')
        ->innerJoin(Contact::class, 'contact', Join::WITH, '(contact.user = users.id)')
        ->innerJoin(Industries::class, 'industries', Join::WITH, '(users.industry = industries.id)')
        ->where('industries.id = :identifier')
        ->andWhere('users.enabled = 1')
        ->andWhere('users.expiresAt >= :expires')
        ->setParameter('identifier', $criteria)
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
