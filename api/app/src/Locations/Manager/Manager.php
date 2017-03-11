<?php

namespace GeoService\Locations\Manager;

use GeoService\AbstractResource,
GeoService\Locations\Entity\Locations as Locations;

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
            $config->setSupplier($this->entityManager->getRepository('GeoService\Suppliers\Entity\Suppliers')->findOneBy(array('id' => $config->getSupplierId())));
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