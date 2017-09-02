<?php

namespace GeoService\Bundles\Entities\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface IEntitiesModel extends IBaseModel
{
	public function authenticate($email, $password);
}
