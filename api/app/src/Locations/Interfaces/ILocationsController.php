<?php

namespace GeoService\Locations\Interfaces;

use GeoService\Base\Interfaces\IBaseController;

interface ILocationsController extends IBaseController
{
	public function findLocationsByIndustryCode(
		\Psr\Http\Message\RequestInterface $request,
		\Psr\Http\Message\ResponseInterface $response,
		$args
	);
}
