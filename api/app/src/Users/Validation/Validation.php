<?php

namespace GeoService\Users\Validation;

use Zend\Validator;
use Zend\Crypt\Password\Bcrypt;

class Validation implements \Zend\Validator\ValidatorInterface {

	protected $validator = null;

	public function __construct() {
		$this->validator = new Validator\ValidatorChain();
	}

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

		return $bcrypt->verify($password, $hash);
	}

	public function validateEmailInput($value) {
		$this->validator
		->attachByName('NotEmpty', [], true)
		->attachByName('StringLength', ['min' => 6], true)
		->attachByName('EmailAddress');
	}

	public function isValid($value) {
		return $this->validator->isValid($value);
	}

	public function getMessages() {
		return $this->validator->getMessages();
	}
}
