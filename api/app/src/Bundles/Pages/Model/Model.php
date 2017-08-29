<?php

namespace GeoService\Bundles\Pages\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Pages\Interfaces\IPagesModel;
use GeoService\Bundles\Pages\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IPagesModel
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
