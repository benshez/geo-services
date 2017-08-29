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
    protected $validator = null;
	protected $getArgs = array();

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
    public function autoComplete($description)
    {
		$this->getArgs = $this->getConfig()
		->getOption('arguments', 'industries', 'autocomplete');

		$this->getArgs['description'] = $description;
		
		if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
		}
		
        return $this->getEntityManager()
        ->getRepository($this->getConfig()->getOption(
			'name',
			'industries'
		), ['description' => $this->getArgs['description']])
        ->getAutoComplete($description);
	}
	
	private function formIsValid()
    {
        $validators = $this->getConfig()->getOption('validators', 'industries', 'autocomplete');
        
        return $this->getValidator()->formIsValid(
			$validators,
			[$this->getArgs['description'],
			$this->getArgs['description']]
		);
    }
}
