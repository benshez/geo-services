<?php

namespace GeoService\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * Suppliers
 *
 * @ORM\Table(name="suppliers")
 * @ORM\Entity
 */
class Suppliers
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_name", type="string", length=45, nullable=true)
     */
    private $supplierName;

    /**
     * @ORM\OneToOne(targetEntity="Locations", mappedBy="supplier")
     * @ORM\JoinColumn(name="id", referencedColumnName="supplier_id")
     */
    private $supplier;

    public function __construct()
    {
        $this->supplier = new ArrayCollection();
    }

}

