<?php

/*
 * This file is part of Geo Service API.
 *
 * (c) Ben van Heerden <benshez@gmail.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace GeoService\Industries\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\EntityRepository;
use GeoService\AbstractEntity;

/**
 * Industries
 *
 * @ORM\Table(name="industries", indexes={@ORM\Index(name="idx_description", columns={"description"})})
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="GeoService\Industries\Entity\Repository")
 */

class Industries extends AbstractEntity
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

    public function getArrayCopy()
    {
        return get_object_vars($this);
    }
}
