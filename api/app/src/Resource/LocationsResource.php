<?php

namespace GeoService\Resource; 
use GeoService\AbstractResource,
GeoService\Entity\Locations as Locations;

{
	class LocationsResource extends AbstractResource
	{
    /**
     * @param string|null $id
     *
     * @return array
     */
    public function get($id = null)
    {
      
      if ($id === null) {
        $configs = $this->entityManager->getRepository('GeoService\Entity\Locations')->findAll();
        $configs = array_map(
          function ($config) {
            $config->setSupplier($this->entityManager->getRepository('GeoService\Entity\Suppliers')->findOneBy(array('id' => $config->getSupplierId())));
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository('GeoService\Entity\Locations')->findOneBy(
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