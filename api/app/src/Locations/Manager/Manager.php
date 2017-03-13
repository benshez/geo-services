<?php

namespace GeoService\Locations\Manager;

use GeoService\AbstractResource;

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
        $configs = $this->entityManager->getRepository('GeoService\Locations\Entity\Locations')->findAll();
        $configs = array_map(
          function ($config) {
            $config->setUser($this->entityManager->getRepository('GeoService\Users\Entity\Users')->findOneBy(array('id' => $config->getUserId())));
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository('GeoService\Locations\Entity\Locations')->findOneBy(
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