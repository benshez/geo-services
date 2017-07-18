<?php

namespace GeoService\Industries\Manager;

use GeoService\Industries\Entity\Industries;
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

			$configs = array_map(function ($config) {
				return $config->getArrayCopy();
			}, $configs);

			return $configs;
		} else {
			$config = $this->entityManager->getRepository(Industries::class)->findOneBy(['id' => $id]);
			
			if ($config) {
				return $config->getArrayCopy();
			}
		}

		return false;
	}

	public function autoComplete($description = null) {
		return $this->entityManager
		->getRepository(Industries::class)
		->getAutoComplete($description);
	}
}
}
