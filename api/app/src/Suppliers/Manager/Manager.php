<?php

namespace GeoService\Suppliers\Manager;

use GeoService\AbstractResource,
GeoService\Suppliers\Entity\Suppliers as Suppliers;

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
        $configs = $this->entityManager->getRepository('GeoService\Suppliers\Entity\Suppliers')->findAll();
        $configs = array_map(
          function ($config) {
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository('GeoService\Suppliers\Entity\Suppliers')->findOneBy(
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