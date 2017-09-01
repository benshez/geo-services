<?php

namespace GeoService\Bundles\Contact\Interfaces;

use GeoService\Modules\Base\Interfaces\IBaseController;

interface IContactController extends IBaseController
{
	public function authenticateOne(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	);
}
