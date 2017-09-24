<?php

namespace GeoService\Modules\Base\Actions;

use GeoService\Modules\Config\Config;
use Interop\Container\ContainerInterface;

/**
 * Base Class For All Get Actions
 * Ben van Heerden
 * 1
 * 0
 * 0
 * BaseAction
 * benshez1@gmail.com
 */
class BaseAction
{
    protected $container = null;
    protected $manager = null;
    protected $config = null;
    protected $settings = null;

    /**
     * Initialise BaseAction To Set Container
     *
     * @param ContainerInterface $container ContainerInterface.
     *
     */
    public function __construct(ContainerInterface $container)
    {
        $this->setContainer($container);
    }
    
    /**
     * Get ContainerInterface
     *
     * @return ContainerInterface
     */
    public function getContainer()
    {
        return $this->container;
    }
    
    /**
     * Set ContainerInterface
     *
     * @param ContainerInterface $container ContainerInterface.
     *
     * @return void
     */
    public function setContainer(ContainerInterface $container)
    {
        $this->container = $container;
        $this->setEntityManager();
    }

    /**
     * Get EntityManager
     *
     * @return EntityManager
     */
    public function getEntityManager()
    {
        return $this->manager;
    }

    /**
     * Set ContainerInterface
     *
     * @return void
     */
    public function setEntityManager()
    {
        $this->manager = $this->container->get('em');
    }

    /**
     * Get Config
     *
     * @return Config
     */
    public function getConfig()
    {
        $this->config = (!$this->config) ? new Config($this->getSettings()) : $this->config;
        return $this->config;
    }

    /**
     * Get Settings
     *
     * @return Settings
     */
    public function getSettings()
    {
        $this->settings = (!$this->settings) ? $this->getContainer()->get('settings') : $this->settings;
        return $this->settings;
    }
}
