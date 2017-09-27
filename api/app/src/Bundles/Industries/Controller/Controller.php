<?php

namespace GeoService\Bundles\Industries\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Industries\Interfaces\IIndustriesController;

class Controller extends BaseController implements IIndustriesController
{
    public function autoComplete(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        return $this->fetched(
            $request,
            $response,
            $this->getAction()->autoComplete(
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
