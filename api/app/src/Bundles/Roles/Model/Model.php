<?php

namespace GeoService\Bundles\Roles\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Roles\Interfaces\IRolesModel;
use GeoService\Bundles\Roles\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IRolesModel
{
	protected $validator = null;
	protected $getArgs = array();

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}

	private function formIsValid()
    {
        $validators = $this->getConfig()->getOption('validators', 'users', 'authenticate');
        
        return $this->getValidator()->formIsValid($validators, $this->getArgs);
    }
}
