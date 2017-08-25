<?php

namespace GeoService\Bundles\Contact\Entity;

use Doctrine\ORM\Mapping as ORM;
use GeoService\Bundles\Users\Entity\Users;

/**
 * Address
 *
 * @ORM\Table(name="contact", indexes={@ORM\Index(name="idx_phone", columns={"phone"}), @ORM\Index(name="idx_email", columns={"email"}), @ORM\Index(name="fk_contacts_user_id_user_id_idx", columns={"user_id"})})
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
    * @ORM\Column(name="updated_at", type="datetime", nullable=false)
    */
    private $updatedAt = 'CURRENT_TIMESTAMP';

    /**
    * @var \DateTime
    *
    * @ORM\Column(name="token_expiry", type="datetime", nullable=false)
    */
    private $tokenExpiry = 'CURRENT_TIMESTAMP';

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
    * Set username
    *
    * @param string $username
    *
    * @return Contact
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
    * @return Contact
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
