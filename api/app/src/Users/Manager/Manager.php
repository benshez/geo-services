<?php

namespace GeoService\Users\Manager;

use GeoService\Users\Entity\Users;
use GeoService\Base\BaseResource;
use GeoService\Users\Validation\Validation;
use \GeoService\Base\BaseEntity;

class Manager extends BaseResource {

	private $validator;

	public function authenticate($email = null, $password = null) {
		if (!$this->userEmailInputIsValid($email)) {
			return $this->validator->getMessagesAray();
		}
		
		if (!$this->userPasswordInputIsValid($password)) {
			return $this->validator->getMessagesAray();
		}

		$user = $this->get(\GeoService\Base\BaseConstants::$USERS_ENTITY, array(\GeoService\Base\BaseConstants::$FIND_BY_ONE_KEY_EMAIL => $email));
		
		if (!$this->userPasswordIsValid($password, $user['salt'], $user['password'])) {
			return $this->validator->getMessagesAray();
		}

		return $user;
	}

	private function userEmailInputIsValid($email) {
		$this->validator = new Validation();
		$this->validator->validateEmailInput($email);
		return $this->validator->isValid($email);
	}

	private function userPasswordInputIsValid($password) {
		$this->validator = new Validation();
		$this->validator->validateUserPasswordInput($password);
		return $this->validator->isValid($password);
	}

	private function userPasswordIsValid($password, $salt, $hash) {
		$this->validator = new Validation();
		return $this->validator->validateUserPasswordIsCorrect($password, $salt, $hash);
	}
}
