<?php
namespace GeoService\Industries\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\ORM\EntityRepository;

class Repository extends EntityRepository
{
    public function getAutoComplete($description = null)
    {
        $description = strtolower($description);

        $qb = $this->_em->createQueryBuilder('u');
        $qb->select('u.id, u.description')
        ->from(Industries::class, 'u')
        ->where($qb->expr()->like('LOWER(u.description)', ':identifier'))
        ->setParameter('identifier',"%$description%");

        $query = $qb->getQuery();

        return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
    }
}