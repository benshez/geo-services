<?php

namespace GeoService\Base\Validation;

interface IBaseValidation {
	public function createValidator();
	public function disposeValidator();
}
