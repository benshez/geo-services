<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\Common\Collections\Collection,
Doctrine\Common\Collections\ArrayCollection,
Doctrine\ORM\EntityManager as EntityManager,
GeoService\Suppliers\Entity\Suppliers;
/**
 * Locations
 *
 * @ORM\Table(name="locations", indexes={@ORM\Index(name="idx_ip_from", columns={"ip_from"}), @ORM\Index(name="idx_ip_to", columns={"ip_to"}), @ORM\Index(name="idx_ip_from_to", columns={"ip_from", "ip_to"}), @ORM\Index(name="supplier_id", columns={"supplier_id"})})
 * @ORM\Entity
 */
class Locations
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
     * @var integer
     *
     * @ORM\Column(name="ip_from", type="integer", nullable=true)
     */
    private $ipFrom;

    /**
     * @var integer
     *
     * @ORM\Column(name="ip_to", type="integer", nullable=true)
     */
    private $ipTo;

    /**
     * @var integer
     *
     * @ORM\Column(name="supplier_id", type="integer", nullable=false)
     */
    private $supplierId;

    /**
     * @var string
     *
     * @ORM\Column(name="country_code", type="string", length=2, nullable=true)
     */
    private $countryCode;

    /**
     * @var string
     *
     * @ORM\Column(name="country_name", type="string", length=64, nullable=true)
     */
    private $countryName;

    /**
     * @var string
     *
     * @ORM\Column(name="region_name", type="string", length=128, nullable=true)
     */
    private $regionName;

    /**
     * @var string
     *
     * @ORM\Column(name="city_name", type="string", length=128, nullable=true)
     */
    private $cityName;

    /**
     * @var float
     *
     * @ORM\Column(name="latitude", type="float", precision=10, scale=0, nullable=true)
     */
    private $latitude;

    /**
     * @var float
     *
     * @ORM\Column(name="longitude", type="float", precision=10, scale=0, nullable=true)
     */
    private $longitude;

    /**
     * @var string
     *
     * @ORM\Column(name="zip_code", type="string", length=30, nullable=true)
     */
    private $zipCode;

    /**
     * @var string
     *
     * @ORM\Column(name="time_zone", type="string", length=8, nullable=true)
     */
    private $timeZone;

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

