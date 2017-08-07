<?php

namespace GeoService\Users\Interfaces;

use GeoService\Base\Interfaces\IBaseController;

interface IUsersController extends IBaseController
{
	public function authenticateOne(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	);
}
