<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use GeoService\Base\BaseEntity;
use GeoService\Users\Entity\Users;

/**
	* Locations
	*
	* @ORM\Table(name="locations", indexes={@ORM\Index(name="idx_ip_from", columns={"ip_from"}), @ORM\Index(name="idx_ip_to", columns={"ip_to"}), @ORM\Index(name="idx_ip_from_to", columns={"ip_from", "ip_to"}), @ORM\Index(name="fk_locations_user_id_users_id", columns={"user_id"})})
	* @ORM\Entity
	* @ORM\Entity(repositoryClass="GeoService\Locations\Entity\Repository")
	*/

class Locations extends BaseEntity {
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
	* @ORM\Column(name="user_id", type="integer", nullable=false)
	*/
	private $userId;

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

	/**
		* @var \DateTime
		*
		* @ORM\Column(name="created_at", type="datetime", nullable=false)
		*/
	private $createdAt = 'CURRENT_TIMESTAMP';

	/**
		* @var \DateTime
		*
		* @ORM\Column(name="updated_at", type="datetime", nullable=false)
		*/
	private $updatedAt = 'CURRENT_TIMESTAMP';
}
