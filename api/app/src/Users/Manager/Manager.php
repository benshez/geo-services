<?php

namespace GeoService\Users\Manager;

use GeoService\Users\Entity\Users,
GeoService\AbstractResource;

{
	class Manager extends AbstractResource
	{
    /**
     * @param string|null $id
     *
     * @return array
     */
    
    public function get($id = null)
    {
  
      if ($id === null) {
        $configs = $this->entityManager->getRepository(Users::class)->findAll();
        
        $configs = array_map(
          function ($config) {
            return $config->getArrayCopy();
          },$configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository(Users::class)->findOneBy(array(\GeoService\AbstractConstants::getAllConsts()['FIND_BY_ONE_KEY_EMAIL'] => $id));
        if ($config) return $config->getArrayCopy();
      }

      return false;
    }

    public function authenticate($email = null, $password = null) 
    {
      if ($email == null || $password = null) return \GeoService\AbstractConstants::getAllConsts()['USER_CREDENTIALS_INVALID'];
        
      $config = $this->entityManager->getRepository(Users::class)
        ->findOneBy(array(\GeoService\AbstractConstants::getAllConsts()['FIND_BY_ONE_KEY_EMAIL'] => $email));

      if ($config) return $config->getArrayCopyAuthenticatedUser();

      return \GeoService\AbstractConstants::getAllConsts()['USER_CREDENTIALS_INVALID'];
    }

	}
}