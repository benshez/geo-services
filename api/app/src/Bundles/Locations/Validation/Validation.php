<?php

namespace GeoService\Bundles\Locations\Validation;

use Zend\Crypt\Password\Bcrypt;
use GeoService\Modules\Base\Validation\BaseValidation;

class Validation extends BaseValidation
{
    public function validateIndustryCodeInput($value)
    {
        $this->validator
        ->attachByName('NotEmpty', [], true)
        ->attachByName('StringLength', ['min' => 1], true);
    }
}
