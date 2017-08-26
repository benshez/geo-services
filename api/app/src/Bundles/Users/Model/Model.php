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
	protected $getArgs = array();

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
    public function authenticate($email, $password)
    {
		$this->getArgs = $this->getOption('arguments', 'users', 'authenticate');

		$this->getArgs['username'] = $email;
		$this->getArgs['password'] = $password;
		
        if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
        }

		$user = $this->get($this->getOption(
			'name',
			'users'
		), ['username' => $this->getArgs['username']]);
        
        if ($user) {
            if (!$this->validateUser($password, $user->getSalt(), $user->getPassword())) {
                return $this->validator->getMessagesAray();
            }
            return $user->getEmail();
        }

        return false;
    }

    private function formIsValid()
    {
        $validators = $this->getOption('validators', 'users', 'authenticate');
        
        return $this->getValidator()->formIsValid($validators, $this->getArgs);
    }

    private function validateUser($password, $salt, $hash)
    {
        return $this->getValidator()->validateUserCredentials($password, $salt, $hash);
    }
}
