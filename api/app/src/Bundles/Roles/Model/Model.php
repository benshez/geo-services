<?php

namespace GeoService\Bundles\Roles\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Roles\Interfaces\IRolesModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IRolesModel
{
    public function getClass()
    {
        return '\GeoService\Bundles\Industries\Entity\Industries';
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
