<?php

namespace GeoService\Industries\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Base\Interfaces\IBaseModel;

interface IIndustriesModel extends IBaseModel
{
	public function autoComplete($description);
}
