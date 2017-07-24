<?php

namespace GeoService\Users\Validation;

use Zend\Crypt\Password\Bcrypt;
use \GeoService\Base\BaseValidation;

class Validation extends BaseValidation {

	public function validateUserPasswordInput($value) {
		$this->validator
		->attachByName('NotEmpty', [], true)
		->attachByName('StringLength', ['min' => 2], true);
	}

	public function validateUserPasswordIsCorrect($password, $salt, $hash) {
		$bcrypt = ($salt) ? new Bcrypt(array(
				'salt' => $salt,
				'cost' => 10
		)) : new Bcrypt();
		// $bcrypt = new Bcrypt(array(
		// 		'salt' => $salt,
		// 		'cost' => 10
		// ));
		// $x = $bcrypt->create($password);
		$verified = $bcrypt->verify($password, $hash);

		if (!$verified) {
			$this->setMessagesAray(\GeoService\Base\BaseConstants::$USER_CREDENTIALS_INVALID);
		}

		return $verified;
	}

	public function validateEmailInput($value) {
		$this->validator
		->attachByName('NotEmpty', [], true)
		->attachByName('StringLength', ['min' => 6], true)
		->attachByName('EmailAddress');
	}
}
