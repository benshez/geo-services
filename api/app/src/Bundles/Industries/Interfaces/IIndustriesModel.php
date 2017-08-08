<?php

namespace GeoService\Bundles\Industries\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface IIndustriesModel extends IBaseModel
{
	public function autoComplete($description);
}
