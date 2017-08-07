<?php

namespace GeoService\Industries\Interfaces;

use GeoService\Base\Interfaces\IBaseController;

interface IIndustriesController extends IBaseController
{
	public function autoComplete(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	);
}
