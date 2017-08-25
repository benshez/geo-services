<?php

namespace GeoService\Bundles\Industries\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Industries\Interfaces\IIndustriesModel;
use GeoService\Bundles\Industries\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IIndustriesModel
{
    const GET_ARGS = array('username' => '$email');
    const ME = '\GeoService\Bundles\Industries\Entity\Industries';
    const NOT_FOUND = 'validators:industries:messages:not_found';
	const GET_VALIDATORS = 'validators:industries:methods:autocomplete';

    protected $validator = null;

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
    public function autoComplete($description)
    {
		if (!$this->formIsValid(['description' => $description], static::GET_VALIDATORS)) {
            return $this->getValidator()->getMessagesAray();
		}
		
        return parent::getEntityManager()
        ->getRepository(static::ME, static::GET_ARGS)
        ->getAutoComplete($description);
	}
	
	private function formIsValid(array $values, String $validators)
    {
        $validators = $this->getConfig()
        ->getConfigSetting($this->getSettings(), $validators);
        
        return $this->getValidator()->formIsValid($validators, $values);
    }
}
