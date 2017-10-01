<?php

namespace GeoService\Modules\Base\Interfaces;

use Doctrine\ORM\EntityRepository;
use GeoService\Modules\Base\Interfaces\IBaseModel;
use GeoService\Modules\Base\Interfaces\IBaseEntity;

interface IBaseEntity
{
    public function __construct($manager, $class);
    public function findOneBy(array $criteria, array $orderBy = null);
    public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null);
}
