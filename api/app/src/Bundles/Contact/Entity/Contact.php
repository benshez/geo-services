<?php

namespace GeoService\Bundles\Contact\Entity;

use Doctrine\ORM\Mapping as ORM;
use GeoService\Bundles\Suppliers\Entity\Suppliers;
use GeoService\Bundles\Users\Entity\Users;

/**
 * Address
 *
 * @ORM\Table(name="contact", uniqueConstraints={@ORM\UniqueConstraint(name="supplier_id_UNIQUE", columns={"supplier_id"}), @ORM\UniqueConstraint(name="user_id_UNIQUE", columns={"user_id"})}, indexes={@ORM\Index(name="idx_phone", columns={"phone"}), @ORM\Index(name="idx_email", columns={"email"})})
 * @ORM\Entity
 */

class Contact
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
	* @ORM\Column(name="address", type="text", length=65535, nullable=true)
	*/
	private $address;

	/**
	* @var string
	*
	* @ORM\Column(name="state", type="string", length=10, nullable=true)
	*/
	private $state;

	/**
	* @var string
	*
	* @ORM\Column(name="city", type="string", length=40, nullable=true)
	*/
	private $city;

	/**
	* @var string
	*
	* @ORM\Column(name="phone", type="string", length=28, nullable=true)
	*/
	private $phone;

	/**
	* @var string
	*
	* @ORM\Column(name="email", type="string", length=28, nullable=true)
	*/
	private $email;

	/**
	* @var string
	*
	* @ORM\Column(name="logo", type="string", length=255, nullable=true)
	*/
	private $logo;

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
	* @ORM\Column(name="enabled", type="boolean", nullable=false)
	*/
	private $enabled;

	/**
	* @var boolean
	*
	* @ORM\Column(name="locked", type="boolean", nullable=false)
	*/
	private $locked;

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="last_login", type="datetime", nullable=false)
	*/
	private $lastLogin;

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="expires_at", type="datetime", nullable=false)
	*/
	private $expiresAt;

	/**
	* @var string
	*
	* @ORM\Column(name="website", type="string", length=255, nullable=true)
	*/
	private $website;

	/**
	* @var string
	*
	* @ORM\Column(name="facebook", type="string", length=255, nullable=true)
	*/
	private $facebook;

	/**
	* @var string
	*
	* @ORM\Column(name="twitter", type="string", length=255, nullable=true)
	*/
	private $twitter;

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
	* @var \DateTime
	*
	* @ORM\Column(name="updated_at", type="datetime", nullable=false)
	*/
	private $updatedAt = 'CURRENT_TIMESTAMP';

	/**
	* @var \DateTime
	*
	* @ORM\Column(name="created_at", type="datetime", nullable=false)
	*/
	private $createdAt = 'CURRENT_TIMESTAMP';

	/**
	* @var \Suppliers
	*
	* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Suppliers\Entity\Suppliers")
	* @ORM\JoinColumns({
	*   @ORM\JoinColumn(name="supplier_id", referencedColumnName="id")
	* })
	*/
	private $supplier;

	/**
	* @var \Users
	*
	* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Users\Entity\Users")
	* @ORM\JoinColumns({
	*   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
	* })
	*/
	private $user;


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
	* Set address
	*
	* @param string $address
	*
	* @return Contact
	*/
	public function setAddress($address)
	{
		$this->address = $address;

		return $this;
	}

	/**
	* Get address
	*
	* @return string
	*/
	public function getAddress()
	{
		return $this->address;
	}

	/**
	* Set state
	*
	* @param string $state
	*
	* @return Contact
	*/
	public function setState($state)
	{
		$this->state = $state;

		return $this;
	}

	/**
	* Get state
	*
	* @return string
	*/
	public function getState()
	{
		return $this->state;
	}

	/**
	* Set city
	*
	* @param string $city
	*
	* @return Contact
	*/
	public function setCity($city)
	{
		$this->city = $city;

		return $this;
	}

	/**
	* Get city
	*
	* @return string
	*/
	public function getCity()
	{
		return $this->city;
	}

	/**
	* Set phone
	*
	* @param string $phone
	*
	* @return Contact
	*/
	public function setPhone($phone)
	{
		$this->phone = $phone;

		return $this;
	}

	/**
	* Get phone
	*
	* @return string
	*/
	public function getPhone()
	{
		return $this->phone;
	}

	/**
	* Set email
	*
	* @param string $email
	*
	* @return Contact
	*/
	public function setEmail($email)
	{
		$this->email = $email;

		return $this;
	}

	/**
	* Get email
	*
	* @return string
	*/
	public function getEmail()
	{
		return $this->email;
	}

	/**
	* Set logo
	*
	* @param string $logo
	*
	* @return Contact
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
	* Set password
	*
	* @param string $password
	*
	* @return Contact
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
	* @return Contact
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
	* Set enabled
	*
	* @param boolean $enabled
	*
	* @return Contact
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
	* Set locked
	*
	* @param boolean $locked
	*
	* @return Contact
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
	* Set lastLogin
	*
	* @param \DateTime $lastLogin
	*
	* @return Contact
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
	* Set expiresAt
	*
	* @param \DateTime $expiresAt
	*
	* @return Contact
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
	* Set website
	*
	* @param string $website
	*
	* @return Contact
	*/
	public function setWebsite($website)
	{
		$this->website = $website;

		return $this;
	}

	/**
	* Get website
	*
	* @return string
	*/
	public function getWebsite()
	{
		return $this->website;
	}

	/**
	* Set facebook
	*
	* @param string $facebook
	*
	* @return Contact
	*/
	public function setFacebook($facebook)
	{
		$this->facebook = $facebook;

		return $this;
	}

	/**
	* Get facebook
	*
	* @return string
	*/
	public function getFacebook()
	{
		return $this->facebook;
	}

	/**
	* Set twitter
	*
	* @param string $twitter
	*
	* @return Contact
	*/
	public function setTwitter($twitter)
	{
		$this->twitter = $twitter;

		return $this;
	}

	/**
	* Get twitter
	*
	* @return string
	*/
	public function getTwitter()
	{
		return $this->twitter;
	}

	/**
	* Set tokenChar
	*
	* @param string $tokenChar
	*
	* @return Contact
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
	* @return Contact
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
	* Set updatedAt
	*
	* @param \DateTime $updatedAt
	*
	* @return Contact
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
	* Set createdAt
	*
	* @param \DateTime $createdAt
	*
	* @return Contact
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
	* Set supplier
	*
	* @param \Suppliers $supplier
	*
	* @return Contact
	*/
	public function setSupplier(Suppliers $supplier = null)
	{
		$this->supplier = $supplier;

		return $this;
	}

	/**
	* Get supplier
	*
	* @return \Suppliers
	*/
	public function getSupplier()
	{
		return $this->supplier;
	}

	/**
	* Set user
	*
	* @param \Users $user
	*
	* @return Contact
	*/
	public function setUser(Users $user = null)
	{
		$this->user = $user;

		return $this;
	}

	/**
	* Get user
	*
	* @return \Users
	*/
	public function getUser()
	{
		return $this->user;
	}
}
