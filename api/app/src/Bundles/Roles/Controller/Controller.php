<?php

namespace GeoService\Bundles\Roles\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Roles\Interfaces\IRolesController;

final class Controller extends BaseController implements IRolesController
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'roles';
    const KEY = 'id';

    /**
     * Get Roles
     *
     * @param RequestInterface  $request  Request Interface.
     *
     * @param ResponseInterface $response Response Interface.
     *
     * @param array             $args     Roles.
     *
     * @return Roles
     */
    public function onFetch(
        RequestInterface $request,
        ResponseInterface $response,
        array $args
    ) {
        $roles = $this->getAction()->onBaseActionGet(
            $this->getAction()->getReference(self::REFERENCE),
            $args
        );
        
        return $roles;
    }
}
