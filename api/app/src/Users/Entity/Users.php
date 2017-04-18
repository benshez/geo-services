<?php

namespace GeoService\Users\Entity;

use Doctrine\ORM\Mapping as ORM,
Zend\Crypt\Password\Bcrypt,
GeoService\AbstractEntity;

/**
 * Users
 *
 * @ORM\Table(name="users", indexes={@ORM\Index(name="idx_username", columns={"username"}), @ORM\Index(name="idx_email", columns={"email"}), @ORM\Index(name="idx_about", columns={"about"}), @ORM\Index(name="idx_website", columns={"website"}), @ORM\Index(name="fk_users_address_id_address_id", columns={"address_id"}), @ORM\Index(name="fk_users_industry_id_industries_id", columns={"industry_id"})})
 * @ORM\Entity
 */
class Users extends AbstractEntity
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
     * @ORM\Column(name="address_id", type="integer", nullable=false)
     */
    protected $addressId;

    /**
     * @var integer
     *
     * @ORM\Column(name="industry_id", type="integer", nullable=true)
     */
    protected $industryId;

    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=255, nullable=false)
     */
    protected $username;

    /**
     * @var string
     *
     * @ORM\Column(name="usersurname", type="string", length=255, nullable=false)
     */
    protected $usersurname;

    /**
     * @var string
     *
     * @ORM\Column(name="logo", type="string", length=255, nullable=true)
     */
    protected $logo;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255, nullable=false)
     */
    protected $password;

    /**
     * @var string
     *
     * @ORM\Column(name="salt", type="string", length=255, nullable=false)
     */
    protected $salt;

    /**
     * @var boolean
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    protected $enabled;

    /**
     * @var boolean
     *
     * @ORM\Column(name="locked", type="boolean", nullable=false)
     */
    protected $locked;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_login", type="datetime", nullable=false)
     */
    protected $lastLogin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="expires_at", type="datetime", nullable=false)
     */
    protected $expiresAt;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=false)
     */
    protected $email;

    /**
     * @var string
     *
     * @ORM\Column(name="about", type="string", length=255, nullable=true)
     */
    protected $about;

    /**
     * @var string
     *
     * @ORM\Column(name="website", type="string", length=255, nullable=true)
     */
    protected $website;

    /**
     * @var string
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    protected $facebook;

    /**
     * @var string
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    protected $twitter;

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

    public function findByEmail($email = null)
    {
    echo "hfghf";
    $query = $this->entityManager->createQueryBuilder()->select('partial u.{id,email,username}')
       ->from(Users::class, 'u')
       ->where('u.email = :identifier')
       ->orderBy('u.username', 'ASC')
       ->setParameter('identifier', $email);

      //$query = $this->createQueryBuilder()->select('u.username')
      // ->from(Users::class, 'u')
      // ->where('u.email = :identifier')
      // ->orderBy('u.name', 'ASC')
      // ->setParameter('identifier', $email);
       
      return $query->getQuery()->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
    }

    public function getArrayCopyAuthenticatedUser($password = null) 
    {
      if ($this == null) return array('error' => \GeoService\AbstractConstants::$USER_CREDENTIALS_INVALID);
          
      $bcrypt = ($this->salt) ? new Bcrypt( array(
          'salt' => $this->salt,
          'cost' => 10
      )) : new Bcrypt();

      $passwordHash = $this->password;

      if ($bcrypt->verify($password, $passwordHash)) return parent::getArrayCopy();

      return array('error' => \GeoService\AbstractConstants::$USER_CREDENTIALS_INVALID);
    }

}

