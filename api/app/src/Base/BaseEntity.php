<?php

namespace GeoService\Base;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\MappedSuperclass;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks
 */
class BaseEntity extends EntityManager
{

	public function __construct()
	{ }

	/**
	 * Get array copy of object
	 *
	 * @return array
	 */
	public function getArrayCopy()
	{
		return get_object_vars($this);
	}

	/**
	 * @ORM\preUpdate
	 */
	public function setUpdatedAt()
	{
			$this->updatedAt = new \DateTime();
	}
}
