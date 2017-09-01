<?php

namespace GeoService\Bundles\Address\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IContactModel
{
	protected $validator = null;

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
}
