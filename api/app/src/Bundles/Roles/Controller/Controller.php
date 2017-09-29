<?php

namespace GeoService\Bundles\Roles\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Roles\Interfaces\IRolesController;
use GeoService\Modules\Base\Options\BaseOptions;

final class Controller extends BaseController implements IRolesController
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'roles';
    const KEY = 'id';
    
    /**
     * Get Roles
     *
     * @param array $args Roles.
     *
     * @return Roles
     */
    public function onFetch(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
        $roles = $this->getAction()->onBaseActionGet(
            $this->getAction()->getReference(self::REFERENCE),
            [self::KEY => $args]
        );
        
        return $roles;
    }
}
