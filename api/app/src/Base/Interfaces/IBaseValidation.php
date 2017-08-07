<?php

namespace GeoService\Base\Interfaces;

interface IBaseValidation {
	public function createValidator();
	public function disposeValidator();
}
