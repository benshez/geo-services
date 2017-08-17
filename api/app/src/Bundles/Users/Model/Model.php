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
	const VALIDATORS = 'validators:user:methods:authentication';
	const NOT_FOUND = 'validators:user:messages:not_found';
	const ME = '\GeoService\Bundles\Users\Entity\Users';
	const GET_ARGS = array('username' => '$email');

	protected $validator = null;

	private function getValidator()
	{
		$this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
		return $this->validator;
	}

	public function authenticate($email, $password)
	{
		if (!$this->formIsValid(['password' => $password, 'username' => $email])) {
			return $this->getValidator()->getMessagesAray();
		}

		$user = $this->get(static::ME, static::GET_ARGS);
		
		if ($user) {
			if (!$this->validateUser($password, $user->getSalt(), $user->getPassword())) {
				return $this->validator->getMessagesAray();
			}
			return $user->getEmail();
		}

		return $this->getConfig()->getConfigSetting($this->getSettings(), static::NOT_FOUND);
	}

	private function formIsValid(array $values)
	{
		$validators = $this->getConfig()
		->getConfigSetting($this->getSettings(), static::VALIDATORS);
		return $this->getValidator()->formIsValid($validators, $values);
	}

	private function validateUser($password, $salt, $hash)
	{
		return $this->getValidator()->validateUserPasswordIsCorrect($password, $salt, $hash);
	}
}
