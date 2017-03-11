<?php

namespace GeoService\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Suppliers
 *
 * @ORM\Table(name="suppliers", indexes={@ORM\Index(name="idx_industry_id", columns={"industry_id"}), @ORM\Index(name="idx_supplier_name", columns={"supplier_name"})})
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
     * @var integer
     *
     * @ORM\Column(name="industry_id", type="integer", nullable=false)
     */
    private $industryId;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_name", type="string", length=45, nullable=false)
     */
    private $supplierName;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_description", type="text", length=255, nullable=false)
     */
    private $supplierDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_url", type="string", length=512, nullable=false)
     */
    private $supplierUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_email", type="string", length=255, nullable=false)
     */
    private $supplierEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_logo", type="string", length=255, nullable=false)
     */
    private $supplierLogo;


}

