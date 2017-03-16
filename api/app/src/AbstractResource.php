<?php
namespace GeoService;

use Doctrine\ORM\EntityManager,
GeoService\AbstractConstants;

abstract class AbstractResource extends AbstractConstants
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    protected $entityManager = null;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }
}
