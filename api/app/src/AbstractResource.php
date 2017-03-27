<?php
namespace GeoService;

use Doctrine\ORM\EntityManager,
Interop\Container\ContainerInterface;

abstract class AbstractResource
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    protected $entityManager = null;

    /**
     * @var \Interop\Container\ContainerInterface
     */
    protected $container = null;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->entityManager = $this->container->get('em');
    }
}
