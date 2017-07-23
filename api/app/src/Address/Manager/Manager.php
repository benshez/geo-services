<?php

namespace GeoService\Address\Manager;

use GeoService\AbstractResource;

{
	class Manager extends AbstractResource {
		/**
			* @param string|null $id
			*
			* @return array
			*/
		public function get($id = null) {
			
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
				$config = $this->entityManager->getRepository('GeoService\Address\Entity\Address')->findOneBy(
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
