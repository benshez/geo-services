<?php

namespace GeoService;

use Zend\Config\Reader,
Symfony\Component\Yaml\Yaml,
Zend\Cache\Service\StorageCacheAbstractServiceFactory,
Zend\ServiceManager\ServiceManager,
Zend\Config\Config,
Zend\Cache\Storage\Adapter\Memcache;

{

	class AbstractConstants
	{
    const USER_CREDENTIALS_INVALID = 'Invalid credentials.';
    const USER_ACCOUNT_DISABLED_FLAG = false;
    const USER_ACCOUNT_DISABLED = 'User account is not enabled.';
    const FIND_BY_ONE_KEY_EMAIL = 'email';
    const FIND_BY_ID= 'id';
    const INDUSTRY_INVALID = 'No industries found with that description.';
		const SYS_PATH = __DIR__;

    public static $USER_CREDENTIALS_INVALID = AbstractConstants::USER_CREDENTIALS_INVALID;
    public static $FIND_BY_ONE_KEY_EMAIL = AbstractConstants::FIND_BY_ONE_KEY_EMAIL;
    public static $FIND_BY_ID = AbstractConstants::FIND_BY_ID;
    public static $INDUSTRY_INVALID = AbstractConstants::INDUSTRY_INVALID;

    private $serviceManager;

    public static function getAllConsts() 
    {

      ////$config = Yaml::parse(file_get_contents(dirname(dirname(dirname(__FILE__))).'\config\module.config.yml'));

      ////$config = new Config($config);

      ////echo "<br/><br/>";
      ////print_r($config);
      //$sconfig = require dirname(dirname(dirname(__FILE__))).'\config\module.config.php';
      //$sconfig = $sconfig['settings']['caching'];
      ////$sconfig = [
      ////  'abstract_factories' => [
      ////      StorageCacheAbstractServiceFactory::class,
      ////  ],
      ////  'caches' => [
      ////  'GeoSevice' => [
      ////      'adapter' => [
      ////          'name'     => 'memcache',
      ////          'options'  => [
      ////              'servers' => [
      ////                  [
      ////                      'localhost', 
      ////                      11211      // Hostname and port
      ////                  ]
      ////              ],
      ////              'namespace' => 'GeoSevice',      // Put your app name here
      ////              'ttl'       => 5 * 60,          // Seconds before cached items expire
      ////          ]
      ////      ],
      ////  ],
      ////]];
      ////echo "<br/><br/>";
      ////print_r($sconfig);

      ////echo $config['caches'];
      //      $sserviceManager = new ServiceManager($sconfig);
      //      //array_values($config)[0]['host']
      //$sserviceManager->setService('config', $sconfig);
      // //echo "<br/><br/>";
      ////print_r($sserviceManager);
      //            //$serviceManager = new ServiceManager($config);
      //      //array_values($config)[0]['host']
      ////$serviceManager->setService('config', $config);
      // //echo "<br/><br/>";
      // //print_r($serviceManager);
      //$sserviceManager->get('GeoSevice');
      //$memcache = new \Memcache();
      ////$memcache->connect(array_values($config)[0]['host'], array_values($config)[0]['port']);

      ////$cacheDriver = new \Doctrine\Common\Cache\MemcacheCache();
      ////$cacheDriver->setMemcache($memcache);

      ////$data = $cacheDriver->fetch('GeoService_AbstractConstants');

      ////if (!$data) {
      ////  $data = (new \ReflectionClass(AbstractConstants::class))->getConstants();
      ////  $cacheDriver->save('GeoService_AbstractConstants', $data);
      ////}
      //$data = null;
      //return $data;
    }
	}
}