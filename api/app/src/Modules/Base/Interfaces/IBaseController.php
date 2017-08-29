<?php

namespace GeoService\Modules\Base\Interfaces;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;
use GeoService\Modules\Base\Options\BaseOptions;

interface IBaseController
{
    public function __construct(IBaseModel $model);
    public function setModel(IBaseModel $model);
    public function getModel();
    public function fetch(
		RequestInterface $request,
		ResponseInterface $response,
		$sender,
		array $arg = null,
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
		$args,
		BaseOptions $options
	);
}
