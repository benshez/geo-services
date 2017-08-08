<?php

namespace GeoService\Bundles\Users\Interfaces;

use GeoService\Modules\Base\Interfaces\IBaseController;

interface IUsersController extends IBaseController
{
	public function authenticateOne(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	);
}
