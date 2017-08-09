<?php

namespace GeoService\Modules\Base\Validation;

use Zend\Validator;
use GeoService\Modules\Base\Interfaces\IBaseValidation;

class BaseValidation implements \Zend\Validator\ValidatorInterface, IBaseValidation {

	protected $validator = null;

	public function __construct() {
		$this->createValidator();
	}
	
	public function isValid($value) {
		$valid = $this->validator->isValid($value);
		if (!$valid) {
			$this->setMessagesAray($this->getMessages());
		}
		return $valid;
	}

	public function getMessages() {
		return $this->validator->getMessages();
	}

	public function getMessagesAray() {
		return $this->error;
	}

	public function setMessagesAray($error = null) {
		$this->error = array('error' => true,  'message' => $error);
	}

	public function createValidator() {
		$this->disposeValidator();
		$this->validator = new Validator\ValidatorChain();
	}
	
	public function disposeValidator() {
		$this->validator = null;
	}
}
