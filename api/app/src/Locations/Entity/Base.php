<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\Common\Collections\Collection,
Doctrine\Common\Collections\ArrayCollection,
Doctrine\ORM\EntityManager as EntityManager,
GeoService\Suppliers\Entity\Suppliers;

class Base
{
    private $supplier;

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
      return get_object_vars($this);
    }

    public function getSupplierId() 
    {
      return $this->supplierId;
    }

    public function setSupplier(Suppliers $supplier = null)
    {
        $this->supplier = $supplier->getArrayCopy();
    }
}

