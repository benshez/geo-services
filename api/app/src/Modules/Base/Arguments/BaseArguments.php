<?php

namespace GeoService\Modules\Base\Arguments;

class BaseArguments implements IBaseController
{
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
}
