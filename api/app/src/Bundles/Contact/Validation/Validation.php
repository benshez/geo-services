<?php

namespace GeoService\Bundles\Contact\Validation;

use Zend\Crypt\Password\Bcrypt;
use Zend\Validator\ValidatorChain;
use GeoService\Modules\Base\Validation\BaseValidation;
use GeoService\Modules\Validators\ABN\AbnOrAcnValidator;

class Validation extends BaseValidation
{
    const INVALID_CREDENTIALS = 'validation:invalid_credentials';
    
    public function validateUserCredentials($password, $salt, $hash)
    {
        $bcrypt = ($salt) ? new Bcrypt(array(
                    'salt' => $salt,
                    'cost' => 10
            )) : new Bcrypt();
    
        $verified = $bcrypt->verify($password, $hash);
    
        if (!$verified) {
            $this->setMessagesArray(null, 'contact', static::INVALID_CREDENTIALS);
        }
    
        return $verified;
	}
	
	public function isValidAbn($abn)
	{
		$abnValidator = new AbnOrAcnValidator();

		$isValid = $abnValidator->isValidAbn($abn);

        if (!$isValid) {
            $this->setMessagesArray(null, 'contact', static::INVALID_CREDENTIALS);
		}
		
		return $isValid;
	}
}
