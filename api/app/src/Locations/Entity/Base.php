<?php

namespace GeoService\Locations\Entity;

use Doctrine\ORM\Mapping as ORM,
Doctrine\Common\Collections\Collection,
Doctrine\Common\Collections\ArrayCollection,
Doctrine\ORM\EntityManager as EntityManager,
GeoService\Users\Entity\Users;

class Base
{
    private $user;

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
      return get_object_vars($this);
    }

    public function getUserId() 
    {
      return $this->userId;
    }

    public function setUser(Users $user = null)
    {
        $this->user = $user->getArrayCopy();
    }
}

