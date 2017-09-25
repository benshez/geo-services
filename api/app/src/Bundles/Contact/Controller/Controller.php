<?php

namespace GeoService\Bundles\Contact\Controller;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Modules\Base\Options\BaseOptions;
use GeoService\Modules\Base\Controller\BaseController;
use GeoService\Bundles\Contact\Interfaces\IContactController;

class Controller extends BaseController implements IContactController
{
    public function authenticateOne(
        RequestInterface $request,
        ResponseInterface $response,
        $args
    ) {
    
        $fetched = $this->fetched(
            $request,
            $response,
            $this->getAction()->authenticate(
                $request->getParam('email'),
                $request->getParam('password')
            ),
            new BaseOptions(
                array('part' => 'messages',
                'class' => 'contact',
                'extention' => 'validation:authenticate:message:UserNotFound')
            )
        );
        
        if ($fetched) {
            return $fetched;
        }
        return false;
    }
}
