<?php

namespace GeoService;

use Doctrine\Common\Cache\ArrayCache,
GeoService\Cache;

{

	class AbstractConstants
	{
    const USER_CREDENTIALS_INVALID = 'Invalid credentials.';
    const USER_ACCOUNT_DISABLED_FLAG = false;
    const USER_ACCOUNT_DISABLED = 'User account is not enabled.';
    const FIND_BY_ONE_KEY_EMAIL = 'email';

    public static function getAllConsts() 
    {
      $cache = new Cache();
      $data = $cache->getCache('GeoService_AbstractConstants');
      if (!$data) {
        $data = (new \ReflectionClass(AbstractConstants::class))->getConstants();
        $cache->setCache("GeoService_AbstractConstants", $data);
        
      }
      return $data;
    }
	}
}