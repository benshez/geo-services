<?php
namespace GeoService\Base;

use GeoService\Base\BaseManager;

class BaseResource extends BaseManager
{

	/**
		* @param string|null $id
		*
		* @return array
		*/
	public function get($class, $id = null)
	{
		if ($id === null) {
			$configs = $this->entityManager->getRepository($class)->findAll();

			$configs = array_map(function ($config) {
				return $config->getArrayCopy();
			}, $configs);

			return $configs;
		} else {
			$config = $this->entityManager->getRepository($class)->findOneBy($id);
			
			if ($config) {
				return $config->getArrayCopy();
			}
		}

		return false;
	}

	/**
		* @param string|$class	
		* @param string|$id
		*
		* @return array
		*/
	public function findAllBy($class, $id)
	{
		$configs = $this->entityManager->getRepository($class)->findBy($id);
		
		// $configs = array_map(function ($config) {
		// 	return $config->getArrayCopy();
		// }, $configs);

		if ($configs) {
			return $configs;
		}

		return false;
	}
}
