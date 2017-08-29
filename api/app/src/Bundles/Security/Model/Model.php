<?php

namespace GeoService\Bundles\Security\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Security\Interfaces\ISecurityModel;
use GeoService\Bundles\Security\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements ISecurityModel
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
