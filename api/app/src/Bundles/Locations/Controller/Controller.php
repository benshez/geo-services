<?php

namespace GeoService\Bundles\Locations\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Locations\Interfaces\ILocationsController;
use GeoService\Modules\Base\Options\BaseOptions;

class Controller extends BaseController implements ILocationsController
{
    public function findLocationsByIndustryCode(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
		return $this->fetched(
			$request,
			$response,
			$this->model->findLocationsByIndustryCode($args),
			new BaseOptions(
				array('part' => 'messages',
				'class' => 'locations',
				'extention' => 'validation:locations:message:IndustriesNotFound')
			)
		);
    }
}
