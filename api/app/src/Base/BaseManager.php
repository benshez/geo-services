<?php
namespace GeoService\Base;

use Doctrine\ORM\EntityManager;
use Interop\Container\ContainerInterface;

class BaseManager extends EntityManager {
	/**
	* @var \Doctrine\ORM\EntityManager
	*/
	protected $entityManager = null;

	/**
	* @var \Interop\Container\ContainerInterface
	*/
	protected $container = null;

	public function __construct(ContainerInterface $container) {
			$this->container = $container;
			$this->entityManager = $this->container->get('em');
	}
}
