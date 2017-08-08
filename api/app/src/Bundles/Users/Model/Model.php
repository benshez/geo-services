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

	public function getClass()
	{
		return '\GeoService\Bundles\Users\Entity\Users';
	}

	public function getMessagePart()
	{
		return 'messages:validation:user:not_found';
	}

	public function setCriteria(array $criteria)
	{
		return $this->criteria = $criteria;
	}

	public function getCriteria()
	{
		return $this->criteria;
	}

	public function authenticate($email, $password)
	{
		if (!$this->userEmailInputIsValid($email)) {
			return $this->validator->getMessagesAray();
		}
		
		if (!$this->userPasswordInputIsValid($password)) {
			return $this->validator->getMessagesAray();
		}
		
		$this->setCriteria(array(\GeoService\Modules\Base\BaseConstants::$FIND_BY_ONE_KEY_EMAIL => $email));

		$user = parent::get();
		
		if ($user) {
			if (!$this->userPasswordIsValid($password, $user->getSalt(), $user->getPassword())) {
				return $this->validator->getMessagesAray();
			}
			return $user->getEmail();
		}
		return false;
	}

	private function userEmailInputIsValid($email)
	{
		$this->setValidator();
		$this->validator->validateEmailInput($email);
		return $this->validator->isValid($email);
	}

	private function userPasswordInputIsValid($password)
	{
		$this->setValidator();
		$this->validator->validateUserPasswordInput($password);
		return $this->validator->isValid($password);
	}

	private function userPasswordIsValid($password, $salt, $hash)
	{
		$this->setValidator();
		return $this->validator->validateUserPasswordIsCorrect($password, $salt, $hash);
	}
}
