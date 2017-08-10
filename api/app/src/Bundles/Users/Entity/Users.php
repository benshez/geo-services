<?php

namespace GeoService\Bundles\Users\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use GeoService\Modules\Base\BaseEntity;

/**
 * Users
 *
 * @ORM\Table(name="users", indexes={@ORM\Index(name="idx_username", columns={"username"}), @ORM\Index(name="idx_email", columns={"email"}), @ORM\Index(name="idx_about", columns={"about"}), @ORM\Index(name="idx_website", columns={"website"}), @ORM\Index(name="fk_users_address_id_address_id", columns={"address_id"}), @ORM\Index(name="fk_users_suppliers_id_suppliers_id", columns={"suppliers_id"}), @ORM\Index(name="fk_users_industry_id_industries_id_idx", columns={"industry_id"})})
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
		* @var integer
		*
		* @ORM\Column(name="suppliers_id", type="integer", nullable=true)
		*/
	private $suppliersId;

	/**
		* @var string
		*
		* @ORM\Column(name="username", type="string", length=255, nullable=false)
		*/
	private $username;

	/**
		* @var string
		*
		* @ORM\Column(name="usersurname", type="string", length=255, nullable=false)
		*/
	private $usersurname;

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
		* @ORM\Column(name="email", type="string", length=255, nullable=false)
		*/
	private $email;

	/**
		* @var string
		*
		* @ORM\Column(name="about", type="string", length=255, nullable=true)
		*/
	private $about;

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
		* @var \GeoService\Bundles\Address\Entity\Address
		*
		* @ORM\ManyToOne(targetEntity="\GeoService\Bundles\Address\Entity\Address")
		* @ORM\JoinColumns({
		*   @ORM\JoinColumn(name="address_id", referencedColumnName="id")
		* })
		*/
	private $address;

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
		* Set suppliersId
		*
		* @param integer $suppliersId
		*
		* @return Users
		*/
	public function setSuppliersId($suppliersId)
	{
			$this->suppliersId = $suppliersId;

			return $this;
	}

	/**
		* Get suppliersId
		*
		* @return integer
		*/
	public function getSuppliersId()
	{
			return $this->suppliersId;
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
		* Set usersurname
		*
		* @param string $usersurname
		*
		* @return Users
		*/
	public function setUsersurname($usersurname)
	{
			$this->usersurname = $usersurname;

			return $this;
	}

	/**
		* Get usersurname
		*
		* @return string
		*/
	public function getUsersurname()
	{
			return $this->usersurname;
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
		* Set email
		*
		* @param string $email
		*
		* @return Users
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
		* Set about
		*
		* @param string $about
		*
		* @return Users
		*/
	public function setAbout($about)
	{
			$this->about = $about;

			return $this;
	}

	/**
		* Get about
		*
		* @return string
		*/
	public function getAbout()
	{
			return $this->about;
	}

	/**
		* Set website
		*
		* @param string $website
		*
		* @return Users
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
		* @return Users
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
		* @return Users
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
		* Set address
		*
		* @param \Address $address
		*
		* @return Users
		*/
	public function setAddress(\GeoService\Bundles\Address\Entity\Address $address = null)
	{
			$this->address = $address;

			return $this;
	}

	/**
		* Get address
		*
		* @return \GeoService\Bundles\Address\Entity\Address
		*/
	public function getAddress()
	{
			return $this->address;
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
		* @return \GeoService\Bundles\Industries\Entity\Industries
		*/
	public function getIndustry()
	{
			return $this->industry;
	}
}
