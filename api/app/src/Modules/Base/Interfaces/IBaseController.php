<?php

namespace GeoService\Modules\Base\Interfaces;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Interfaces\IBaseAction;

interface IBaseController
{
    public function __construct(IBaseAction $action);
    public function setAction(IBaseAction $action);
    public function getAction();
    public function fetch(
        RequestInterface $request,
        ResponseInterface $response,
        $sender,
        array $args = null,
        BaseOptions $options
    );
    public function fetchOne(
        RequestInterface $request,
        ResponseInterface $response,
        $sender,
        array $args,
        BaseOptions $options
    );
    public function fetched(
        RequestInterface $request,
        ResponseInterface $response,
        array $args,
        BaseOptions $options
    );
}
