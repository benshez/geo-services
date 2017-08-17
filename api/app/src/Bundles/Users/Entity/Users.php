<?php

namespace GeoService\Bundles\Users\Entity;

use Doctrine\ORM\Mapping as ORM;
use GeoService\Bundles\Industries\Entity\Industries;
use GeoService\Bundles\Roles\Entity\Roles;

/**
 * Users
 *
 * @ORM\Table(name="users", indexes={@ORM\Index(name="fk_users_role_id_roles_id_idx", columns={"role_id"}), @ORM\Index(name="fk_users_industry_id_industries_id_idx", columns={"industry_id"})})
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
	* @var string
	*
	* @ORM\Column(name="username", type="string", length=255, nullable=false)
	*/
	private $username;

	/**
	* @var string
	*
	* @ORM\Column(name="password", type="string", length=255, nullable=false)
	*/
	private $password;

	/**
	* @var string
	*
	* @ORM\Column(name="salt", type="string", length=255, nullable=false)
	*/
	private $salt;

	/**
	* @var boolean
	*
	* @ORM\Column(name="locked", type="boolean", nullable=false)
	*/
	private $locked;

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
	* @ORM\Column(name="last_login", type="datetime", nullable=false)
	*/
	private $lastLogin;

	/**
	* @var string
	*
	* @ORM\Column(name="token_char", type="string", length=16, nullable=true)
	*/
	private $tokenChar;

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="token_expiry", type="datetime", nullable=true)
	*/
	private $tokenExpiry;

	/**
	* @var string
	*
	* @ORM\Column(name="logo", type="string", length=255, nullable=true)
	*/
	private $logo;

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="updated_at", type="datetime", nullable=false)
	*/
	private $updatedAt = 'CURRENT_TIMESTAMP';

	/**
	* @var \Industries
	*
	* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Industries\Entity\Industries")
	* @ORM\JoinColumns({
	*   @ORM\JoinColumn(name="industry_id", referencedColumnName="id")
	* })
	*/
	private $industry;

	/**
	* @var \Roles
	*
	* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Roles\Entity\Roles")
	* @ORM\JoinColumns({
	*   @ORM\JoinColumn(name="role_id", referencedColumnName="id")
	* })
	*/
	private $role;


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
	* Set username
	*
	* @param string $username
	*
	* @return Users
	*/
	public function setUsername($username)
	{
		$this->username = $username;

		return $this;
	}

	/**
	* Get username
	*
	* @return string
	*/
	public function getUsername()
	{
		return $this->username;
	}

	/**
	* Set password
	*
	* @param string $password
	*
	* @return Users
	*/
	public function setPassword($password)
	{
		$this->password = $password;

		return $this;
	}

	/**
	* Get password
	*
	* @return string
	*/
	public function getPassword()
	{
		return $this->password;
	}

	/**
	* Set salt
	*
	* @param string $salt
	*
	* @return Users
	*/
	public function setSalt($salt)
	{
		$this->salt = $salt;

		return $this;
	}

	/**
	* Get salt
	*
	* @return string
	*/
	public function getSalt()
	{
		return $this->salt;
	}

	/**
	* Set locked
	*
	* @param boolean $locked
	*
	* @return Users
	*/
	public function setLocked($locked)
	{
		$this->locked = $locked;

		return $this;
	}

	/**
	* Get locked
	*
	* @return boolean
	*/
	public function getLocked()
	{
		return $this->locked;
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
	* Set lastLogin
	*
	* @param \DateTime $lastLogin
	*
	* @return Users
	*/
	public function setLastLogin($lastLogin)
	{
		$this->lastLogin = $lastLogin;

		return $this;
	}

	/**
	* Get lastLogin
	*
	* @return \DateTime
	*/
	public function getLastLogin()
	{
		return $this->lastLogin;
	}

	/**
	* Set tokenChar
	*
	* @param string $tokenChar
	*
	* @return Users
	*/
	public function setTokenChar($tokenChar)
	{
		$this->tokenChar = $tokenChar;

		return $this;
	}

	/**
	* Get tokenChar
	*
	* @return string
	*/
	public function getTokenChar()
	{
		return $this->tokenChar;
	}

	/**
	* Set tokenExpiry
	*
	* @param \DateTime $tokenExpiry
	*
	* @return Users
	*/
	public function setTokenExpiry($tokenExpiry)
	{
		$this->tokenExpiry = $tokenExpiry;

		return $this;
	}

	/**
	* Get tokenExpiry
	*
	* @return \DateTime
	*/
	public function getTokenExpiry()
	{
		return $this->tokenExpiry;
	}

	/**
	* Set logo
	*
	* @param string $logo
	*
	* @return Users
	*/
	public function setLogo($logo)
	{
		$this->logo = $logo;

		return $this;
	}

	/**
	* Get logo
	*
	* @return string
	*/
	public function getLogo()
	{
		return $this->logo;
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
	* @param \Industries $industry
	*
	* @return Users
	*/
	public function setIndustry(Industries $industry = null)
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

	/**
	* Set role
	*
	* @param \Roles $role
	*
	* @return Users
	*/
	public function setRole(Roles $role = null)
	{
		$this->role = $role;

		return $this;
	}

	/**
	* Get role
	*
	* @return \Roles
	*/
	public function getRole()
	{
		return $this->role;
	}
}
