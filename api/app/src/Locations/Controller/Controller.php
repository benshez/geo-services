<?php

namespace GeoService\Locations\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\RequestInterface;
use GeoService\Locations\Manager\Manager;
use GeoService\Base\BaseController;

final class Controller extends BaseController {

	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}
}
