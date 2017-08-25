<?php

namespace GeoService\Bundles\Address\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Contact\Interfaces\IContactModel;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IContactModel
{
    public function getClass()
    {
        return '\GeoService\Bundles\Contact\Entity\Contact';
    }

    public function getMessagePart()
    {
        return 'validation:address:not_found';
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
