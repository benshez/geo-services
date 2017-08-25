<?php

namespace GeoService\Bundles\Industries\Controller;

use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Industries\Interfaces\IIndustriesController;

class Controller extends BaseController implements IIndustriesController
{
		const NOT_FOUND = 'validators:industries:messages:not_found';
		
    public function autoComplete(
        \Psr\Http\Message\RequestInterface $request,
        \Psr\Http\Message\ResponseInterface $response,
        $args
    ) {
        $config = $this->model->autoComplete($args['description']);

        if ($config) {
            return $response->withJSON($config);
        }

        return $this->model->getConfig()->getConfigSetting($this->model->getSettings(), static::NOT_FOUND);
    }
}
