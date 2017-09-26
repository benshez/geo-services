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
use GeoService\Bundles\Contact\Actions\Action;
use GeoService\Bundles\Contact\Validation\Validation;

class Get extends Action
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
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            self::AUTHENTICATE,
            [self::CONTACT_NAME => $email, self::PASSWORD => $password]
        )) {
            $message = $this->getValidator()->getMessagesAray();
            return $message;
        }

        $contact = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::EMAIL => $email]
        );
        
        if ($contact) {
            if (!$this->formIsValid(
                $this->getValidator(new Validation($this)),
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

            return array(
                'id' => $contact->getId(),
                'entity' => $contact->getEntity()->getId(),
                'role' => $contact->getRole()->getId(),
                'enabled' => $contact->getEnabled(),
                'locked' => $contact->getLocked(),
                'username'=> $contact->getUsername(),
                'usersurname'=> $contact->getUsersurname(),
                'address'=> $contact->getAddress(),
                'city'=> $contact->getCity(),
                'state'=> $contact->getState(),
                'post_code'=> $contact->getPostCode(),
                'phone'=> $contact->getPhone(),
                'email'=> $contact->getEmail(),
                'website'=> $contact->getWebsite(),
                'facebook'=> $contact->getFacebook(),
                'twitter'=> $contact->getTwitter(),
                'logo'=> $contact->getLogo(),
                'abn'=> $contact->getEntity()->getIdentifier(),
                'token_char' => $contact->getTokenChar(),
                'token_expiry' => $contact->getTokenExpiry(),
            );
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
        $user = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
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
