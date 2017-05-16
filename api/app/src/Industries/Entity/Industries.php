<?php

namespace GeoService\Industries\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\ORM\EntityRepository,
GeoService\AbstractEntity;

/**
 * Industries
 *
 * @ORM\Table(name="industries", indexes={@ORM\Index(name="idx_description", columns={"description"})})
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="GeoService\Industries\Entity\IndustryRepository")
 */

class Industries extends AbstractEntity
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt = 'CURRENT_TIMESTAMP';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at", type="datetime", nullable=false)
     */
    private $updatedAt = 'CURRENT_TIMESTAMP';

    public function getArrayCopy()
    {
      return get_object_vars($this);
    }
}

class IndustryRepository extends EntityRepository
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