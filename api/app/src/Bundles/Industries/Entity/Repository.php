<?php

namespace GeoService\Bundles\Industries\Entity;

use GeoService\Modules\Base\Entity\BaseEntity;

class Repository extends BaseEntity
{
    public function getAutoComplete($description = null)
    {
        $description = strtolower($description);

        $qb = $this->_em->createQueryBuilder('u');
        $qb->select('u.id, u.description')
        ->from(Industries::class, 'u')
        ->where($qb->expr()->like('LOWER(u.description)', ':identifier'))
        ->setParameter('identifier', "%$description%");

        $query = $qb->getQuery();

        return $query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
    }
}
