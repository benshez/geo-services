<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM,
GeoService\Locations\Entity\Base;
/**
 * Locations
 *
 * @ORM\Table(name="locations", indexes={@ORM\Index(name="idx_ip_from", columns={"ip_from"}), @ORM\Index(name="idx_ip_to", columns={"ip_to"}), @ORM\Index(name="idx_ip_from_to", columns={"ip_from", "ip_to"}), @ORM\Index(name="supplier_id", columns={"supplier_id"})})
 * @ORM\Entity
 */
class Locations extends Base
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="ip_from", type="integer", nullable=true)
     */
    protected $ipFrom;

    /**
     * @var integer
     *
     * @ORM\Column(name="ip_to", type="integer", nullable=true)
     */
    protected $ipTo;

    /**
     * @var integer
     *
     * @ORM\Column(name="supplier_id", type="integer", nullable=false)
     */
    protected $supplierId;

    /**
     * @var string
     *
     * @ORM\Column(name="country_code", type="string", length=2, nullable=true)
     */
    protected $countryCode;

    /**
     * @var string
     *
     * @ORM\Column(name="country_name", type="string", length=64, nullable=true)
     */
    protected $countryName;

    /**
     * @var string
     *
     * @ORM\Column(name="region_name", type="string", length=128, nullable=true)
     */
    protected $regionName;

    /**
     * @var string
     *
     * @ORM\Column(name="city_name", type="string", length=128, nullable=true)
     */
    protected $cityName;

    /**
     * @var float
     *
     * @ORM\Column(name="latitude", type="float", precision=10, scale=0, nullable=true)
     */
    protected $latitude;

    /**
     * @var float
     *
     * @ORM\Column(name="longitude", type="float", precision=10, scale=0, nullable=true)
     */
    protected $longitude;

    /**
     * @var string
     *
     * @ORM\Column(name="zip_code", type="string", length=30, nullable=true)
     */
    protected $zipCode;

    /**
     * @var string
     *
     * @ORM\Column(name="time_zone", type="string", length=8, nullable=true)
     */
    protected $timeZone;

}

