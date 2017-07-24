<?php

namespace GeoService\Base;

use Zend\Validator;

class BaseValidation implements \Zend\Validator\ValidatorInterface {

	protected $validator = null;

	public function __construct() {
		$this->validator = new Validator\ValidatorChain();
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
}
