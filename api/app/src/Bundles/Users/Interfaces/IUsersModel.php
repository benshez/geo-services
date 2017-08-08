<?php

namespace GeoService\Bundles\Users\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface IUsersModel extends IBaseModel
{
	public function authenticate($email, $password);
}
