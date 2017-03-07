<?php

namespace GeoService\Resource; 
use GeoService\AbstractResource;
use GeoService\Entity\SupplierLocation as SupplierLocation;

{
	class SupplierLocationResource extends AbstractResource
	{

    public function get($slug = null)
    {
      
      if ($slug === null) {
        $configs = $this->entityManager->getRepository('GeoService\Entity\SupplierLocation')->findAll();
        $configs = array_map(
          function ($config) {
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository('GeoService\Entity\SupplierLocation')->findOneBy(
          array('slug' => $slug)
        );
        if ($config) {
          return $config->getArrayCopy();
        }
      }

      return false;
    }

	}
}