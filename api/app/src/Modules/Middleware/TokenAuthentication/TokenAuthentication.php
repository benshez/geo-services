<?php

namespace GeoService\Modules\Middleware\TokenAuthentication;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Permissions\Acl\Acl as ZendAcl;
use Zend\Permissions\Acl\Role\GenericRole as Role;
use Zend\Permissions\Acl\Resource\GenericResource as Resource;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Bundles\Contact\Model\Model as Contact;
use GeoService\Bundles\Roles\Model\Model as Roles;

class TokenAuthentication extends ZendAcl
{
    protected $container;
    protected $apiVersion;
    protected $roles;
    protected $route;
    protected $routeIndex;
    protected $defaultRole = 'Guest';

    public function __construct(ContainerInterface $container, array $route, int $routeIndex)
    {
        $this->container = $container;
        $this->apiVersion = $container['settings']['version'];
        $this->route = $route;
        $this->routeIndex = $routeIndex;
    }
    
    private function setRoles()
    {
        $roles = new Roles($this->container);
        $this->roles = $roles->onFindAll(null);
    }

    private function createAccesslist()
    {
        $this->setRoles();

        $allowedResource = $this->route['pattern'][$this->routeIndex];
        $allowedMethod = $this->route['methods'][$this->routeIndex];
        $allowedRoles = $this->route['roles'][$this->routeIndex];
        $resourceAdded = false;
        
        foreach ($this->roles as $role) {
            $this->addRole(new Role($role->getRole()));
            
            if (!$resourceAdded) {
                $this->addResource(new Resource($allowedResource));
                $resourceAdded = true;
            }
            
            if (in_array($role->getRole(), $allowedRoles)) {
                $this->allow($role->getRole(), $allowedResource, $allowedMethod);
            }
        }
    }

    private function denyAccess()
    {
        http_response_code(401);
        exit;
    }

    private function isCleanIP($ip)
    {
        $whiteList = ['127.0.0.1', '192.168.1.7'];
        return in_array($ip, $whiteList);
    }

    public function __invoke(
        RequestInterface $request,
        ResponseInterface $response,
        $next
    ) {
        $this->createAccesslist();

        $routeInfo = $request->getAttribute('routeInfo');

        $router = $this->container->get('router');

        if (null === $routeInfo || ($routeInfo['request'] !== [$request->getMethod(), (string) $request->getUri()])) {
            $request = $this->dispatchRouterAndPrepareRoute($request, $router);
            $routeInfo = $request->getAttribute('routeInfo');
        }

        $route = $request->getAttribute('route')->getPattern();
        $method = $request->getMethod();

        $token = (isset($request->getHeader('authorization')[0])) ? $request->getHeader('authorization')[0]: null;
        $user = null;
        $role = $this->defaultRole;

        if ($token != null) {
            $user = new Contact($this->container);
            $role = $user->onGetActiveUserRoleByToken($token);
            
            if (!$role) {
                $role = $this->defaultRole;
            }
        }

        if (!$this->isAllowed($role, $route, $method)) {
            return $this->denyAccess();
        }

        $isCleanIP = $this->isCleanIP($_SERVER['REMOTE_ADDR']);

        if (!$isCleanIP) {
            $this->denyAccess();
        }

        $response = $next($request, $response);

        return $response;
    }
}
