<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Suppliers
 *
 * @ORM\Table(name="suppliers", indexes={@ORM\Index(name="idxuser_review", columns={"user_review"}), @ORM\Index(name="idxcompany_name", columns={"company_name"}), @ORM\Index(name="fk_suppliers_industry_id_industries_id", columns={"industry_id"})})
 * @ORM\Entity
 */
class Suppliers
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
     * @ORM\Column(name="company_name", type="string", length=45, nullable=false)
     */
    private $companyName;

    /**
     * @var integer
     *
     * @ORM\Column(name="user_review", type="integer", nullable=true)
     */
    private $userReview;

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
     * @var \Industries
     *
     * @ORM\ManyToOne(targetEntity="Industries")
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
     * Set companyName
     *
     * @param string $companyName
     *
     * @return Suppliers
     */
    public function setCompanyName($companyName)
    {
        $this->companyName = $companyName;

        return $this;
    }

    /**
     * Get companyName
     *
     * @return string
     */
    public function getCompanyName()
    {
        return $this->companyName;
    }

    /**
     * Set userReview
     *
     * @param integer $userReview
     *
     * @return Suppliers
     */
    public function setUserReview($userReview)
    {
        $this->userReview = $userReview;

        return $this;
    }

    /**
     * Get userReview
     *
     * @return integer
     */
    public function getUserReview()
    {
        return $this->userReview;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     *
     * @return Suppliers
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
     * @return Suppliers
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
     * @return Suppliers
     */
    public function setIndustry(\Industries $industry = null)
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

