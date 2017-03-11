<?php

namespace GeoService\Suppliers\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\Common\Collections\Collection,
Doctrine\Common\Collections\ArrayCollection,
GeoService\Locations\Entity\Locations;

class Base
{
    public function __construct()
    {
        $this->supplier = new ArrayCollection();
    }

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
      return get_object_vars($this);
    }
}

