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
          },$configs
        );

        return $configs;
      } else {
        $config = $this->entityManager->getRepository(Industries::class)->findOneBy(array('id' => $id));
        if ($config) return $config->getArrayCopy();
      }

      return false;
    }

    public function autoComplete($description = null)
    {
        return $this->entityManager
        ->getRepository(Industries::class)
        ->getAutoComplete($description);

        //$query = $this->entityManager->createQueryBuilder();
        //$query->select('u.id, u.description')
        //->from(Industries::class, 'u')
        //->where($query->expr()->like('LOWER(u.description)', ':identifier'))
        //->orderBy('u.description', 'ASC')
        //->setParameter('identifier', '\'' . strtolower($description) . '%\'');
        ////echo '\'' . strtolower($description) . '%\'';
        ////echo $query->getQuery()->getSQL();
        ////print_r($query->getQuery()->getParameters());
        //$configs = array_map(
        //  function ($config) {
        //    return $config->getArrayCopy();
        //  },
        //  $query->getQuery()->getArrayResult()
        //);
        //return $configs;        
        //return $query->getQuery()->getArrayResult();
        //return getArrayCopy();
    }

	}
}