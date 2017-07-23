<?php

namespace GeoService;

use Zend\Cache\StorageFactory;
use end\Cache\Service\StorageCacheAbstractServiceFactory;
use Zend\ServiceManager\ServiceManager;
use Zend\Cache\Storage\Adapter\Memcache;

{
class Cache {

	private $config;
	private $serviceManager;
	private $cache;

	public function __construct() {
		//Array ( [abstract_factories] => Array ( [0] => StorageCacheAbstractServiceFactory::class ), [caches] => Array ( [GeoSevice] => Array ( [adapter] => Array ( [name] => memcache, [options] => Array ( [servers] => [localhost, 11211], ['namespace'] => GeoSevice, [ttl] => 5 * 60 ) ) ) ) );
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
													'localhost', 
													11211      // Hostname and port
											]
									],
									'namespace' => 'GeoSevice',      // Put your app name here
									'ttl'       => 5 * 60,          // Seconds before cached items expire
							]
					],
			],
		]];

		$this->serviceManager = new ServiceManager($this->config);
		$this->serviceManager->setService('config', $this->config);
	}

	private function getCacheObject() {
		return $this->serviceManager->get('Memcache');
	}

	public function setCache($key, $value) {
		//$memcache = new Memcache();
		//$memcache->connect('127.0.0.1', 11211);

		//$cacheDriver = new \Doctrine\Common\Cache\MemcacheCache();
		//$cacheDriver->setMemcache($memcache);
		//$cacheDriver->save('cache_id', 'my_data');
	}

	public function getCache($key) {
		//cache->fetch($cacheKey)
		$this->cache = $this->getCacheObject();
		return $this->cache->getItem($key);
	}
}
}
