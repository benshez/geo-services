<?php
/**
 * BaseGet File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseSave
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Contact\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Contact\Actions\Actions;
use GeoService\Bundles\Contact\Validation\Validation;

class Get extends Actions
{
    const REFERENCE = 'contact';
    const TOKEN = 'tokenChar';
    const AUTHENTICATE = 'authenticate';
    const AUTHENTICATION = 'authentication';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';
    const ROLE = 'role';
    const CONTACT_NAME = 'username';
    const CONTACT_SURNAME = 'usersurname';
    const PASSWORD = 'password';
    const EMAIL = 'email';
    const LOGO = 'logo';
    const ABN = 'abn';
    const USER = 'user';
    const HASH = 'hash';
    
    /**
     * Authenticate User
     *
     * @param string $email    User Name.
     *
     * @param string $password User Password.
     *
     * @return User
     */
    public function authenticate(string $email, string $password)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            self::AUTHENTICATE,
            [self::CONTACT_NAME => $email, self::PASSWORD => $password]
        )) {
            $message = $this->getValidator()->getMessagesAray();
            return $message;
        }

        $contact = $this->get()->get(
            $this->getReference(),
            [self::EMAIL => $email]
        );
        
        if ($contact) {
            if (!$this->formIsValid(
                $this->getValidator(),
                self::REFERENCE,
                self::AUTHENTICATION,
                [self::USER => [
                    self::PASSWORD => $password,
                    self::HASH => $contact->getPassword()]
                ]
            )) {
                $message = $this->getValidator()->getMessagesAray();
                return $message;
            }
            return $contact;
        }

        return false;
    }
        
    /**
     * Get Active User Role By Token
     *
     * @param string $token Token Genrated When User Logs In.
     *
     * @return User Role
     */
    public function onGetActiveUserRoleByToken(string $token)
    {
        $user = $this->get()->get(
            $this->getConfig()->getOption(
                self::REFERENCE_OBJECT,
                self::REFERENCE
            ),
            [self::TOKEN => $token]
        );
        
        if (!$user ||
            $user->getTokenExpiry() > Config::currentDateYearMonthDay()
            ) {
            return false;
        }
        
        if ($user->getLocked() || !$user->getEnabled()) {
            return false;
        }
        
        $role = $user->getRole()->getRole();
        
        return $role;
    }
}
