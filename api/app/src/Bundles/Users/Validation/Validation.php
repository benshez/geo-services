<?php

namespace GeoService\Bundles\Users\Validation;

use Zend\Crypt\Password\Bcrypt;
use Zend\Validator\ValidatorChain;
use GeoService\Modules\Base\Validation\BaseValidation;

class Validation //extends BaseValidation
{

	protected $validator = null;
	protected $validators = array();
	protected $error = array();

	public function validateUserPasswordIsCorrect($password, $salt, $hash) {
		$bcrypt = ($salt) ? new Bcrypt(array(
				'salt' => $salt,
				'cost' => 10
		)) : new Bcrypt();

		$verified = $bcrypt->verify($password, $hash);

		if (!$verified) {
			$this->setMessagesAray(\GeoService\Modules\Base\BaseConstants::$USER_CREDENTIALS_INVALID);
		}

		return $verified;
	}

	public function formIsValid(array $fields, array $values)
	{
		$this->validators = array();
		$this->createValidators($fields, $values);
		$isValid = true;

		foreach ($this->validators as $index => $validator) {
			$value = $values[$index];
			$isValid = $validator->isValid($value);

			if (!$isValid) {
				$this->setMessagesAray($validator->getMessages());
				return $isValid;
			}
		}

		return $isValid;
	}

	private function createValidators(array $fields, array $values)
	{
		foreach ($fields as $index => $validators) {

			$this->validator = new ValidatorChain();

			foreach ($validators as $validator) {
				$name = $validator[0];
				$options = [];

				if (isset($validator[1])) {
					foreach ($validator[1] as $opt => $option) {
						if (isset($option[key($option)])) {
							$key = key($option);
							$options[$key] = $option[$key];
						}
					}
				}

				$break = isset($validator[2]) ? $validator[2] : null;

				switch (sizeof($validator)) {
					case 1:
						$this->validator->attachByName($name);
						break;
					case 2:
						$this->validator->attachByName($name, $options);
						break;
					default:
						$this->validator->attachByName($name, $options, $break);
						break;
				}
			}

			$this->validators[$index] = $this->validator;
			$this->validator = null;
		}
	}

	public function setMessagesAray($error = null) {
		$this->error = array('error' => true,  'message' => $error);
	}

	public function getMessagesAray() {
		return $this->error;
	}
}
