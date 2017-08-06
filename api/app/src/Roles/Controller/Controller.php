<?php

namespace GeoService\Roles\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Locations\Manager\Manager;
use GeoService\Base\BaseController;

final class Controller
{

	public function __construct(Manager $manager)
	{
		$this->manager = $manager;
	}
}
