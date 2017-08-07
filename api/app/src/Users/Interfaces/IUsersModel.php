<?php

namespace GeoService\Users\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Base\Interfaces\IBaseModel;

interface IUsersModel extends IBaseModel
{
	public function authenticate($email, $password);
}
