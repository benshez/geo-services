<?php

namespace GeoService\Locations\Interfaces;

use Interop\Container\ContainerInterface;
use GeoService\Base\Interfaces\IBaseModel;

interface ILocationsModel extends IBaseModel
{
	public function findLocationsByIndustryCode($description);
}
