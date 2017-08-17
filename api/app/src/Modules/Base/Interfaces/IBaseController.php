<?php

namespace GeoService\Modules\Base\Interfaces;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface IBaseController
{
	public function __construct(IBaseModel $model);
	public function setModel(IBaseModel $model);
	public function getModel();
	public function fetch(RequestInterface $request, ResponseInterface $response, $args);
	public function fetchOne(RequestInterface $request, ResponseInterface $response, $args);
}
