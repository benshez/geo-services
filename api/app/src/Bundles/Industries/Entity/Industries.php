<?php

namespace GeoService\Bundles\Industries\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Industries
 *
 * @ORM\Table(name="industries", indexes={@ORM\Index(name="idx_description", columns={"description"})})
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="GeoService\Bundles\Industries\Entity\Repository")
 */

class Industries
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
    * @ORM\Column(name="description", type="string", length=255, nullable=false)
    */
    private $description;

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
    * Get id
    *
    * @return integer
    */
    public function getId()
    {
        return $this->id;
    }

    /**
    * Set description
    *
    * @param string $description
    *
    * @return Industries
    */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
    * Get description
    *
    * @return string
    */
    public function getDescription()
    {
        return $this->description;
    }

    /**
    * Set createdAt
    *
    * @param \DateTime $createdAt
    *
    * @return Industries
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
    * @return Industries
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
}
