<?php

namespace GeoService\Modules\Base\Model;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Config\Config;

class BaseModel
{
    protected $container = null;
    protected $manager = null;
    protected $config = null;
    protected $settings = null;
    protected $validator = null;

    public function __construct(ContainerInterface $container)
    {
        $this->setContainer($container);
    }

	/**
	* @param string|null $id
	*
	* @return array
	*/
	public function get($sender, array $args)
	{
		if ($args === null) {
			$configs = $this->getEntityManager()->getRepository($sender)->findAll();

			$configs = array_map(function ($config) {
				return $config;
			}, $configs);

			return $configs;
		} else {
			$config = $this->getEntityManager()->getRepository($sender)->findOneBy($args);
			
			if ($config) {
				return $config;
			}
		}

		return false;
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

    public function getConfig()
    {
        $this->config = (!$this->config) ? new Config($this->getSettings()) : $this->config;
        return $this->config;
    }

    public function getSettings()
    {
        $this->settings = (!$this->settings) ? $this->getContainer()->get('settings') : $this->settings;
        return $this->settings;
    }

	public function removeAndFlush($entity)
	{
		$this->getEntityManager()->remove($entity);
		$this->flushEntity($entity);
	}
	
	public function persistAndFlush($entity)
	{
		$this->updatedTimestamps($entity);
		$this->getEntityManager()->persist($entity);
		$this->flushEntity($entity);
	}

	private function updatedTimestamps($entity)
	{
		$date = new \DateTime("now");

		$entity->setUpdatedAt($date);
	
		if ($entity->getCreatedAt() === "CURRENT_TIMESTAMP" ||
		$entity->getCreatedAt() === null) {
			$entity->setCreatedAt($date);
		}
	}

	private function flushEntity($entity)
	{
		$this->getEntityManager()->flush($entity);
	}
}
