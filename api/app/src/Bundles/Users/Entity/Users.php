<?php

namespace GeoService\Bundles\Users\Entity;

use Doctrine\ORM\Mapping as ORM;
use GeoService\Bundles\Industries\Entity\Industries;
use GeoService\Bundles\Roles\Entity\Roles;

/**
 * Users
 *
 * @ORM\Table(name="users", indexes={@ORM\Index(name="fk_users_industry_id_industries_id_idx", columns={"industry_id"})})
 * @ORM\Entity
 */
class Users
{
	/**
	* @var integer
	*
	* @ORM\Column(name="id", type="integer")
	* @ORM\Id
	* @ORM\GeneratedValue(strategy="IDENTITY")
	*/
	private $id;

	/**
	* @var boolean
	*
	* @ORM\Column(name="enabled", type="boolean", nullable=false)
	*/
	private $enabled;

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="expires_at", type="datetime", nullable=false)
	*/
	private $expiresAt;

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

	/**
	* @var \GeoService\Bundles\Industries\Entity\Industries
	*
	* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Industries\Entity\Industries")
	* @ORM\JoinColumns({
	*   @ORM\JoinColumn(name="industry_id", referencedColumnName="id")
	* })
	*/
	private $industry;


	/**
	* Get id
	*
	* @return integer
	*/
	public function getId()
	{
		return $this->id;
	}

	/**
	* Set enabled
	*
	* @param boolean $enabled
	*
	* @return Users
	*/
	public function setEnabled($enabled)
	{
		$this->enabled = $enabled;

		return $this;
	}

	/**
	* Get enabled
	*
	* @return boolean
	*/
	public function getEnabled()
	{
		return $this->enabled;
	}

	/**
	* Set expiresAt
	*
	* @param \DateTime $expiresAt
	*
	* @return Users
	*/
	public function setExpiresAt($expiresAt)
	{
		$this->expiresAt = $expiresAt;

		return $this;
	}

	/**
	* Get expiresAt
	*
	* @return \DateTime
	*/
	public function getExpiresAt()
	{
		return $this->expiresAt;
	}

	/**
	* Set createdAt
	*
	* @param \DateTime $createdAt
	*
	* @return Users
	*/
	public function setCreatedAt($createdAt)
	{
		$this->createdAt = $createdAt;

		return $this;
	}

	/**
	* Get createdAt
	*
	* @return \DateTime
	*/
	public function getCreatedAt()
	{
		return $this->createdAt;
	}

	/**
	* Set updatedAt
	*
	* @param \DateTime $updatedAt
	*
	* @return Users
	*/
	public function setUpdatedAt($updatedAt)
	{
		$this->updatedAt = $updatedAt;

		return $this;
	}

	/**
	* Get updatedAt
	*
	* @return \DateTime
	*/
	public function getUpdatedAt()
	{
		return $this->updatedAt;
	}

	/**
	* Set industry
	*
	* @param \GeoService\Bundles\Industries\Entity\Industries $industry
	*
	* @return Users
	*/
	public function setIndustry(\GeoService\Bundles\Industries\Entity\Industries $industry = null)
	{
		$this->industry = $industry;

		return $this;
	}

	/**
	* Get industry
	*
	* @return \Industries
	*/
	public function getIndustry()
	{
		return $this->industry;
	}
}
