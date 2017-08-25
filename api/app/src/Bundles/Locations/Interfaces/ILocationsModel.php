<?php

namespace GeoService\Bundles\Locations\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface ILocationsModel extends IBaseModel
{
    public function findLocationsByIndustryCode($description);
}
