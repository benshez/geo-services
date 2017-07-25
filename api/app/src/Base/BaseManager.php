<?php
namespace GeoService\Base;

use Interop\Container\ContainerInterface;
use GeoService\Base\BaseEntity;

class BaseManager extends BaseEntity {
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
