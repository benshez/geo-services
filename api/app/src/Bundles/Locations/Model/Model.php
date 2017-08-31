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
    const INDUSTRY = 'industry';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }

    public function findLocationsByIndustryCode($industry)
    {
        if (!$this->formIsValid(
            'locations',
            [
                $industry
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        $location = $this->get($this->getConfig()->getOption(
            'name',
            'locations'
        ), [self::INDUSTRY => $industry]);

        return $location;
    }

    private function formIsValid($extention, $fields)
    {
        $validators = $this->getConfig()->getOption('validators', 'locations', $extention);
        return $this->getValidator()->formIsValid(
            $validators,
            $fields
        );
    }
}
