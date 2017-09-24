<?php

namespace GeoService\Bundles\Contact\Actions;

/**
 * @todo Description of class Get
 * @author 
 * @version 
 * @package 
 * @subpackage 
 * @category 
 * @link 
 */
class Get {
    
    const REFERENCE = 'contact';
    
    /**
     * @todo Description of function onGetActiveUserRoleByToken
     * @param  $token
     * @return 
     */
    public function onGetActiveUserRoleByToken($token) {
        $user = $this->getEntityById(self::REFERENCE, 'tokenChar', $token);
        $curr_date = date('Y-m-d');
        if ($user->getTokenExpiry() > $curr_date) {
            return false;
        }
        if ($user->getLocked() || !$user->getEnabled()) {
            return false;
        }
        $user = $user->getRole()->getRole();
        return $user;
    }
}
