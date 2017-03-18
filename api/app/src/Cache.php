<?php

namespace GeoService;

use Zend\Cache\StorageFactory,
Zend\Cache\Service\StorageCacheAbstractServiceFactory,
Zend\ServiceManager\ServiceManager,
Zend\Cache\Storage\Adapter\Memcache;

{
	class Cache
	{
    private $config;
    private $serviceManager;
    private $cache;

    public function __construct()
    {
      $this->config = [
        'abstract_factories' => [
            StorageCacheAbstractServiceFactory::class,
        ],
        'caches' => [
        'Memcache' => [
            'adapter' => [
                'name'     => 'memcache',
                'options'  => [
                    'servers' => [
                        [
                            '127.0.0.1', 
                            11211      // Hostname and port
                        ]
                    ],
                    'namespace' => 'Skeleton',      // Put your app name here
                    'ttl'       => 5 * 60,          // Seconds before cached items expire
                ]
            ],
        ],
      ]];

      $this->serviceManager = new ServiceManager($this->config);
      $this->serviceManager->setService('config', $this->config);
    }

    private function getCacheObject()
    {
      return $this->serviceManager->get('Memcache');
    }

    public function setCache($key, $value) 
    {
      $this->cache = $this->getCacheObject();
      $this->cache->addItem($key, $value);
    }

    public function getCache($key) {   
      $this->cache = $this->getCacheObject(); 
      return $this->cache->getItem($key);
    }
  }
}