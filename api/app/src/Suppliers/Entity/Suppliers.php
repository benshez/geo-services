<?php

namespace GeoService\Suppliers\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\Common\Collections\Collection,
Doctrine\Common\Collections\ArrayCollection,
GeoService\Locations\Entity\Locations;
/**
 * Suppliers
 *
 * @ORM\Table(name="suppliers")
 * @ORM\Entity
 */
class Suppliers
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_name", type="string", length=45, nullable=false)
     */
    private $supplierName;

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

