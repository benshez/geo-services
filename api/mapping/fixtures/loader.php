<?php

namespace fixtures;

use Doctrine\Common\DataFixtures\Loader;
use GeoService\Modules\Base\Fixtures\UserDataLoader;

$loader = new Loader();
$loader->addFixture(new UserDataLoader());
