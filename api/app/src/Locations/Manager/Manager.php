<?php

namespace GeoService\Locations\Manager;

use GeoService\AbstractResource,
GeoService\Locations\Entity\Locations,
GeoService\Users\Entity\Users;

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
        $configs = $this->entityManager->getRepository(Locations::class)->findAll();
        $configs = array_map(
          function ($config) {
            $config->setUser($this->entityManager->getRepository(Users::class)->findOneBy(array('id' => $config->getUserId())));
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository(Locations::class)->findOneBy(
          array('id' => $id)
        );
        if ($config) {
          return $config->getArrayCopy();
        }
      }

      return false;
    }

	}
}