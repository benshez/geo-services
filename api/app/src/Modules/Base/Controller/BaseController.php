<?php

namespace GeoService\Modules\Base\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;
use GeoService\Modules\Base\Interfaces\IBaseController;
use GeoService\Modules\Base\Options\BaseOptions;

class BaseController implements IBaseController
{
	protected $parameters = array();

    public function __construct(IBaseModel $model)
    {
        $this->setModel($model);
    }

    public function setModel(IBaseModel $model)
    {
        $this->model = $model;
    }

    public function getModel()
    {
        return $this->model;
    }

	public function setParameters(IBaseModel $parameters)
    {
        $this->parameters = $parameters;
    }
	
    public function fetch(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        $this->getModel()->setCriteria($args);
        $configs = $this->getModel()->get();
        return $response->withJSON($configs);
    }

    public function fetchOne(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        $this->getModel()->setCriteria($args);

        $config = $this->getModel()->get();

        if ($config) {
            return $response->withJSON($config);
        }
        return $response->withStatus(404, $this->model->getNotFoundMessageFromConfig($this->model->getMessagePart()));
	}
	
	public function fetched(
		ResponseInterface $response,
		$args,
		BaseOptions $options
	) {
		if ($args) {
            return $response->withJSON($args);
		}
		
		return $response->withStatus(
			404,
			$this->model->getConfig()->getOption(
				$options->getOptions('part'),
				$options->getOptions('class'),
				$options->getOptions('extention')
			)
		);
	}
}
