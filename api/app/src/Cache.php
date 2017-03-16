<?php

namespace GeoService;

use Zend\Cache\Service\StorageCacheAbstractServiceFactory,
Zend\ServiceManager\ServiceManager,
Zend\Cache\Storage\Adapter\Redis;

{
	class Cache
	{
    private $config;
    private $serviceManager;

    public function __construct()
    {
      $this->config = [
        'abstract_factories' => [
            StorageCacheAbstractServiceFactory::class,
        ],
        'caches' => [
            'mycache' => [
                'adapter' => Redis::class,
                'options' => [
                    'server' => [
                        'host' => 'localhost',
                    ],
                    'password' => 'foobared',
                ],
            ],
        ],
      ];
      $this->serviceManager = new ServiceManager($this->config);
      $this->serviceManager->setService('GeoService', $this->config);
    }

    private function getCacheObject()
    {
      return $this->serviceManager->get('GeoService');
    }

    public function setCache($key, $value) 
    {
      $cache = $this->getCacheObject();
      print_r($cache);
      $cache->addItem($key, $value);
    }

    public function getCache($key) {
      $cache = $this->getCacheObject();
      
      return $cache->getItem($key);
    }
  }
}