<?php

namespace GeoService;

use GeoService\AbstractConstants;

{

	abstract class AbstractEntity extends AbstractConstants
	{

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
      return get_object_vars($this);
    }

	}
}