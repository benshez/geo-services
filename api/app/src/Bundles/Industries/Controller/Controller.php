<?php

namespace GeoService\Bundles\Industries\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Industries\Interfaces\IIndustriesController;
use GeoService\Modules\Base\Options\BaseOptions;

class Controller extends BaseController implements IIndustriesController
{
    public function autoComplete(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
		return $this->fetched(
			$response,
			$this->model->autoComplete(
				$args['description']
			),
			new BaseOptions(
				array('part' => 'messages',
				'class' => 'industries',
				'extention' => 'validation:autocomplete:message:IndustriesNotFound')
			)
		);
    }
}
