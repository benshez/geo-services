<?php

namespace GeoService\Bundles\Locations\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Pages\Interfaces\IPagesModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IPagesModel
{
    public function getClass()
    {
        return '\GeoService\Bundles\Pages\Entity\Pages';
    }

    public function getMessagePart()
    {
        return 'messages:validation:address:not_found';
    }

    public function setCriteria(array $criteria)
    {
        return $this->criteria = $criteria;
    }

    public function getCriteria()
    {
        return $this->criteria;
    }
}
