<?php

namespace GeoService\Bundles\Locations\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Locations\Interfaces\ILocationsModel;
use GeoService\Bundles\Locations\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements ILocationsModel
{
	protected $validator = null;
	protected $getArgs = array();

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}

    public function findLocationsByIndustryCode($industry)
    {
		$this->getArgs = $this->getConfig()
		->getOption('arguments', 'locations', 'locations');

		$this->getArgs['industry'] = $industry;
		
		if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
		}
		
		$location = $this->get($this->getConfig()->getOption(
			'name',
			'locations'
		), ['industry' => $industry]);

        return $location;
    }

	private function formIsValid()
    {
        $validators = $this->getConfig()->getOption('validators', 'locations', 'locations:industry');
        
        return $this->getValidator()->formIsValid($validators, [$this->getArgs['industry']]);
    }
}
