<?php

namespace GeoService\Users\Manager;

use Zend\ServiceManager\ServiceManager,
Zend\Crypt\Password\Bcrypt,
GeoService\Users\Entity\Users,
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
        $config = $this->entityManager->getRepository(Users::class)->findOneBy(array(\GeoService\AbstractConstants::$USER_CREDENTIALS_INVALID => $id));
        if ($config) return $config->getArrayCopy();
      }

      return false;
    }

    public function authenticate($email = null, $password = null) 
    {
      
      if ($email == null || $password == null) return array('error' => \GeoService\AbstractConstants::$USER_CREDENTIALS_INVALID);

      $config = $this->entityManager->getRepository(Users::class)
        ->findOneBy(array(\GeoService\AbstractConstants::$FIND_BY_ONE_KEY_EMAIL => $email));
        
      if ($config) return $config->getArrayCopyAuthenticatedUser($password);

      return array('error' => \GeoService\AbstractConstants::$USER_CREDENTIALS_INVALID);
    }

	}
}