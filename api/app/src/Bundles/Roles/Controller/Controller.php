<?php

namespace GeoService\Bundles\Roles\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Roles\Interfaces\IRolesController;
use GeoService\Modules\Base\Options\BaseOptions;

final class Controller extends BaseController implements IRolesController
{
    public function onFetch(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
		return $this->fetched(
			$request,
			$response,
			$this->model->onFindAll(
				$args
			),
			new BaseOptions(
				array('part' => 'messages',
				'class' => 'roles',
				'extention' => 'validation:fetch:message:RolesNotFound')
			)
		);
	}
}
