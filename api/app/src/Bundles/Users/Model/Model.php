<?php

namespace GeoService\Bundles\Users\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Users\Interfaces\IUsersModel;
use GeoService\Bundles\Users\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Modules\Config\Config;

class Model extends BaseModel implements IUsersModel
{
	const VALIDATORS = 'validators:user:methods:authenticate';

	public function getClass()
	{
		return '\GeoService\Bundles\Users\Entity\Users';
	}

	public function getMessagePart()
	{
		return 'validation:user:not_found';
	}

	public function setCriteria(array $criteria)
	{
		return $this->criteria = $criteria;
	}

	public function getCriteria()
	{
		return $this->criteria;
	}

	public function setValidator()
	{
		$this->validator = null;
		$this->validator = new Validation();
	}
	
	public function authenticate($email, $password)
	{
		if (!$this->formIsValid([$password, $email])) {
			$x = $this->validator->getMessagesAray();
			return $this->validator->getMessagesAray();
			//return $this->validator->getMessages();
		}
		//$this->setCriteria(array('\GeoService\Modules\Base\BaseConstants::$FIND_BY_ONE_KEY_EMAIL' => $email));

		//$token = bin2hex(random_bytes(16));

		//$user = parent::get();
		
		// if ($user) {
		// 	if (!$this->userPasswordIsValid($password, $user->getSalt(), $user->getPassword())) {
		// 		return $this->validator->getMessagesAray();
		// 	}
		// 	return $user->getEmail();
		// }
		return false;
	}

	private function formIsValid(array $values)
	{
		$config = new Config();
		$this->setValidator();
		$validators = $config->getConfigSetting($this->getContainer()->get('settings'), self::VALIDATORS);

		return $this->validator->formIsValid($validators, $values);
	}

	private function userPasswordIsValid($password, $salt, $hash)
	{
		$this->setValidator();
		return $this->validator->validateUserPasswordIsCorrect($password, $salt, $hash);
	}
}
