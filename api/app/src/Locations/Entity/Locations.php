<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM,
GeoService\AbstractEntity,
GeoService\Users\Entity\Users;

/**
 * Locations
 *
 * @ORM\Table(name="locations", indexes={@ORM\Index(name="idx_ip_from", columns={"ip_from"}), @ORM\Index(name="idx_ip_to", columns={"ip_to"}), @ORM\Index(name="idx_ip_from_to", columns={"ip_from", "ip_to"}), @ORM\Index(name="fk_locations_user_id_users_id", columns={"user_id"})})
 * @ORM\Entity
 */
class Locations extends AbstractEntity
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
     * @ORM\Column(name="user_id", type="integer", nullable=false)
     */
    protected $userId;

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

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    protected $createdAt = 'CURRENT_TIMESTAMP';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at", type="datetime", nullable=false)
     */
    protected $updatedAt = 'CURRENT_TIMESTAMP';

    public function getUserId() 
    {
      return $this->userId;
    }

    /**
     * @var GeoService\Users\Entity\Users
     *
     */
    protected $user;

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function setUser(Users $user = null)
    {
      if($user === null) return false;
      $this->user = $user->getArrayCopy();   
    }

}
