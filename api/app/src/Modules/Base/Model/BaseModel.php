<?php

namespace GeoService\Modules\Base\Model;

use Interop\Container\ContainerInterface;

class BaseModel
{
	protected $container = null;
	protected $manager = null;
	protected $validator = null;
	protected $criteria = null;

	public function __construct(ContainerInterface $container)
	{
		$this->setContainer($container);
	}

	public function getContainer()
	{
		return $this->container;
	}

	public function setContainer(ContainerInterface $container)
	{
		$this->container = $container;
		$this->setEntityManager();
	}

	public function getEntityManager()
	{
		return $this->manager;
	}

	public function setEntityManager()
	{
		$this->manager = $this->container->get('em');
	}

	public function getValidator()
	{
		return $this->validator;
	}

	/**
		* @param string|null $id
		*
		* @return array
		*/
	public function get()
	{
		$criteria = $this->getCriteria();

		if ($criteria === null) {
			$configs = $this->getEntityManager()->getRepository($this->getClass())->findAll();

			$configs = array_map(function ($config) {
				return $config;
			}, $configs);

			return $configs;
		} else {
			$config = $this->getEntityManager()->getRepository($this->getClass())->findOneBy($criteria);
			
			if ($config) {
				return $config;
			}
		}

		return false;
	}

	public function getNotFoundMessageFromConfig($path)
	{
		$path = explode(':', $path);
    $message = $this->getContainer()->get('settings');

		foreach ($path as $key => $part) {
			$message = $message[$part];
		}

		return $message;
	}
}
