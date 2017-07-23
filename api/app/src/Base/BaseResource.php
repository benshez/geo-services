<?php
namespace GeoService\Base;

use Doctrine\ORM\EntityManager;
use Interop\Container\ContainerInterface;

class BaseResource {
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

	public function get($class, $id = null) {
		if ($id === null) {
			$configs = $this->entityManager->getRepository($class)->findAll();

			$configs = array_map(function ($config) {
				return $config->getArrayCopy();
			}, $configs);

			return $configs;
		} else {
			$config = $this->entityManager->getRepository($class)->findOneBy($id);
			
			if ($config) {
				return $config->getArrayCopy();
			}
		}

		return false;
	}
}
