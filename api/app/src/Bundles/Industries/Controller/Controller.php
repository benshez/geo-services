<?php

namespace GeoService\Bundles\Industries\Controller;

use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Industries\Interfaces\IIndustriesController;

class Controller extends BaseController implements IIndustriesController
{
    public function autoComplete(
        \Psr\Http\Message\RequestInterface $request,
        \Psr\Http\Message\ResponseInterface $response,
        $args
    ) {
        $config = $this->model->autoComplete($args['description']);

        if ($config) {
            return $response->withJSON($config);
        }

		return $response->withStatus(404, $this->model->getConfig()->getOption(
			'messages',
			'industries',
			'validation:autocomplete:message:IndustriesNotFound'
		));
    }
}
