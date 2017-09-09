<?php

namespace GeoService\Modules\Validators\Authentication;

use Zend\Validator\AbstractValidator;
use Zend\Crypt\Password\Bcrypt;

class AuthenticationValidator extends AbstractValidator
{

	const USER = 'user';

	protected $messageTemplates = array(
        self::USER  => 'Not not a valid user name or password.'
	);

	public function __construct(array $options = array())
    {
       parent::__construct($options);
	}
	
	public function isValid($value)
    {
		$isValid = true;

		$bcrypt = new Bcrypt();

		$isValid = $bcrypt->verify($value['password'], $value['hash']);

		if (!$isValid) {
			$this->error(self::USER);
		}

		return $isValid;
	}
}
