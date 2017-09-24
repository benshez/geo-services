<?php

namespace GeoService\Bundles\Contact\Actions;

use GeoService\Modules\Config\Config;

/**
 * All Get Actions For Contacts
 * Ben van Heerden
 * 1
 * 0
 * 0
 * Contacts
 * benshez1@gmail.com
 */
class Get
{
    const REFERENCE = 'contact';
    const TOKEN = 'tokenChar';
    
    /**
     * Get Active User Role By Token
     *
     * @param string $token Token Genrated When User Logs In.
     *
     * @return User Roles
     */
    public function onGetActiveUserRoleByToken(string $token)
    {
        $user = $this->getEntityById(self::REFERENCE, self::TOKEN, $token);
        if ($user->getTokenExpiry() > Config::currentDateYearMonthDay()) {
            return false;
        }
        if ($user->getLocked() || !$user->getEnabled()) {
            return false;
        }
        $user = $user->getRole()->getRole();
        return $user;
    }
}
