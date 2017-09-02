<?php

namespace GeoService\Bundles\Entities\Model;

use Zend\Crypt\Password\Bcrypt;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Entities\Entity\Entities;
use GeoService\Bundles\Roles\Entities\Roles;
use GeoService\Bundles\Entities\Interfaces\IEntitiesModel;
use GeoService\Bundles\Entities\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IEntitiesModel
{
    protected $validator = null;
    
    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
    }
}
