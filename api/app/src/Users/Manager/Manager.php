<?php

namespace GeoService\Users\Manager;

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
      echo "kkk";
      if ($id === null) {
        $configs = $this->entityManager->getRepository('GeoService\Users\Entity\Users')->findAll();
        $configs = array_map(
          function ($config) {
            return $config->getArrayCopy();
          },
          $configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository('GeoService\Users\Entity\Users')->findOneBy(
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