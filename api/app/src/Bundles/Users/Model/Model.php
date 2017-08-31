<?php

namespace GeoService\Bundles\Users\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Users\Interfaces\IUsersModel;
use GeoService\Bundles\Users\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IUsersModel
{
    protected $validator = null;
    
    const USER_NAME = 'username';

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }
    
    public function authenticate($email, $password)
    {
        if (!$this->formIsValid(
            'authenticate',
            [
                $email,
                $email,
                $email,
                $password,
                $password
            ]
        )) {
            return $this->getValidator()->getMessagesAray();
        }

        $user = $this->get($this->getConfig()->getOption(
            'name',
            'users'
        ), [self::USER_NAME => $email]);
        
        if ($user) {
            if (!$this->validateUser($password, $user->getSalt(), $user->getPassword())) {
                return $this->validator->getMessagesAray();
            }
            return $user->getEmail();
        }

        return false;
    }

    private function formIsValid($extention, $fields)
    {
        $validators = $this->getConfig()->getOption('validators', 'users', $extention);
        return $this->getValidator()->formIsValid(
            $validators,
            $fields
        );
    }

    private function validateUser($password, $salt, $hash)
    {
        return $this->getValidator()->validateUserCredentials($password, $salt, $hash);
    }
}
