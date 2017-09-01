<?php

namespace GeoService\Bundles\Users\Validation;

use Zend\Crypt\Password\Bcrypt;
use Zend\Validator\ValidatorChain;
use GeoService\Modules\Base\Validation\BaseValidation;

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
            $this->setMessagesArray(null, 'users', static::INVALID_CREDENTIALS);
        }

        return $verified;
    }
}
