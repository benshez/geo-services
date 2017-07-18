<?php

namespace GeoService\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Industries
 *
 * @ORM\Table(name="industries", indexes={@ORM\Index(name="idx_description", columns={"description"})})
 * @ORM\Entity
 */
class Industries {
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
}
