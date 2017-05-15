<?php

namespace GeoService\Industries\Manager;

use GeoService\Industries\Entity\Industries,
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
        $configs = $this->entityManager->getRepository(Industries::class)->findAll();
        $configs = array_map(
          function ($config) {
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository(Industries::class)->findOneBy(
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