<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Security
 *
 * @ORM\Table(name="security", indexes={@ORM\Index(name="fk_security_users_id_user_id_idx_idx", columns={"user_id"}), @ORM\Index(name="fk_security_role_id_roles_id_idx", columns={"role_id"})})
 * @ORM\Entity
 */
class Security
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
     * @var \Security
     *
     * @ORM\ManyToOne(targetEntity="Security")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="role_id", referencedColumnName="id")
     * })
     */
    private $role;

    /**
     * @var \Users
     *
     * @ORM\ManyToOne(targetEntity="Users")
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
     * Set role
     *
     * @param \Security $role
     *
     * @return Security
     */
    public function setRole(\Security $role = null)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Get role
     *
     * @return \Security
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set user
     *
     * @param \Users $user
     *
     * @return Security
     */
    public function setUser(\Users $user = null)
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

