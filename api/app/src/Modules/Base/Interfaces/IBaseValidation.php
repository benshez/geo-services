<?php

namespace GeoService\Modules\Base\Interfaces;

interface IBaseValidation {
	public function createValidator();
	public function disposeValidator();
}
