<?php

namespace GeoService;

use GeoService\AbstractConstants;

{

	abstract class AbstractEntity extends AbstractConstants
	{

    protected $error = false;
    protected $message = null;

    public function setError($message = null) 
    {
      if($message) {
        $this->error = true;
        $this->message = $message;
      }
    }

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