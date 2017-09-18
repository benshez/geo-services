<?php

namespace GeoService\Modules\Middleware\TokenAuthentication;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Permissions\Acl\Acl as ZendAcl;
use Zend\Permissions\Acl\Role\GenericRole as Role;
use Zend\Permissions\Acl\Resource\GenericResource as Resource;

class TokenAuthentication extends ZendAcl
{
    protected $container;
    protected $apiVersion;

    //roles
    protected $userRole;
    protected $adminRole;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->apiVersion = $container['settings']['version'];

        /**
            * roles are not dynamic
            * role with higher access level is higher number
        **/
        ///$this->userRole = 1;
		//$this->adminRole = 2;
		$this->addRole(new Role('guest'))
			->addRole(new Role('member'))
			->addRole(new Role('admin'));

		$parents = array('guest', 'member', 'admin');
		
		//$this->addResource('/');
		//$this->addResource(sprintf('/api/"%s"/industries', $this->apiVersion));
		$this->addResource(new Resource(sprintf('/api/%s/industries', $this->apiVersion)));

		$this->allow('guest', sprintf('/api/%s/industries', $this->apiVersion), 'GET');
    }

    // private function ACL($path, $method)
    // {
    //     //init access list
    //     $accessList = array(
    //         array(
    //             'role' => $this->userRole,
    //             'path' => '/api/'. $this->apiVersion . '/address/{id}',
    //             'method' => ['GET', 'POST']
    //         ),

    //         array(
    //             'role' => $this->adminRole,
    //             'path' => $this->apiVersion . '/users',
    //             'method' => ['GET']
    //         ),

    //         array(
    //             'role' => $this->adminRole,
    //             'path' => $this->apiVersion . '/products',
    //             'method' => ['POST']
    //         ),

    //     );

    //     //search access list
    //     foreach ($accessList as $value) {
    //         foreach ($value['method'] as $valueMethod) {
    //             if ($value['path'] == $path && $valueMethod == $method) {
    //                 return $value;
    //             }
    //         }
    //     }
    // }

    private function denyAccess()
    {
        http_response_code(401);
        exit;
    }

    private function checkUserRole($accessRule, $_userRole)
    {
        if ($_userRole == 'user') {
            $_userRole = $this->userRole;
        } elseif ($_userRole == 'admin') {
            $_userRole = $this->adminRole;
        }
        
        //check the role access
        if ($_userRole >= $accessRule) {
            return true;
        }
    }

    public function __invoke(
        RequestInterface $request,
        ResponseInterface $response,
        $next
    ) {

		if ($request->getMethod() === 'OPTIONS') {
			return false;
		}

		$ver = $this->apiVersion;

		if (!$this->isAllowed('guest', sprintf('/api/%s/industries', $ver), $request->getMethod())) {
			return $this->denyAccess();
		}
		
		$isCleanIP = $this->isCleanIP($_SERVER['REMOTE_ADDR']);

        if (!$isCleanIP) {
			$this->denyAccess();
        }

        // $token = null;

        // if (isset($request->getHeader('token')[0])) {
        //     $token = $request->getHeader('token')[0];
        // }

        // //same format as api route
        // $route = $request->getAttribute('route');
        // $path = $route->getPattern();
        // $method = $request->getMethod();
        // $accessRule = $this->ACL($path, $method);

        // if (isset($accessRule) && $token != null) {
        //     $checkToken = $this->container->UsersCtrl->validateToken($token);
        //     if ($checkToken != null) {
        //         /**
        //                 * accessRule defined by dev
        //                 * checkToken retrieve from db
        //         **/
        //         if ($this->checkUserRole($accessRule['role'], $checkToken['role'])) {
        //             $this->container->UsersCtrl->updateUserToken($token);
        //         } else {
        //             $this->denyAccess();
        //         }
        //     } else {
        //         $this->denyAccess();
        //     }
        // } elseif (isset($accessRule) && $token == null) {
        //     $this->denyAccess();
        // }

        $response = $next($request, $response);

        return $response;
    }

    protected function isCleanIP($ip)
    {
		return $ip === '127.0.0.1';
    }
}
