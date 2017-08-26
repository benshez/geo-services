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
    const ME = '\GeoService\Bundles\Industries\Entity\Industries';

	const NOT_FOUND = 'entities:industries:validation:messages:not_found';
	const GET_VALIDATORS = 'entities:industries:validation:methods:autocomplete';

	protected $getArgs = array('description' => '$description');
    protected $validator = null;

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
    public function autoComplete($description)
    {
		$this->getArgs['description'] = $description;
		
		if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
		}
		
        return parent::getEntityManager()
        ->getRepository(static::ME, $this->getArgs)
        ->getAutoComplete($description);
	}
	
	private function formIsValid()
    {
        $validators = $this->getConfig()
        ->getConfigSetting($this->getSettings(), static::GET_VALIDATORS);
        
        return $this->getValidator()->formIsValid($validators, $this->getArgs);
    }
}
