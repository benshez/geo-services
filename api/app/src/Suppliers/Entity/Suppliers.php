<?php

namespace GeoService\Suppliers\Entity;

use Doctrine\ORM\Mapping as ORM,
GeoService\Suppliers\Entity\Base;
/**
 * Suppliers
 *
 * @ORM\Table(name="suppliers")
 * @ORM\Entity
 */
class Suppliers extends Base
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
     * @ORM\Column(name="industry_id", type="integer", nullable=false)
     */
    protected $industryId;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_name", type="string", length=45, nullable=false)
     */
    protected $supplierName;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_description", type="text", length=255, nullable=false)
     */
    protected $supplierDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_url", type="string", length=512, nullable=false)
     */
    protected $supplierUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_email", type="string", length=255, nullable=false)
     */
    protected $supplierEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="supplier_logo", type="string", length=255, nullable=false)
     */
    protected $supplierLogo;


}

