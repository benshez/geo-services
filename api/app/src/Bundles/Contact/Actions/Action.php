<?php

/**
 * This file is part of the GeoService API.
 *
 * PHP Version 7.1.9
 *
 * @category  GeoService
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Contact\Actions;

use GeoService\Bundles\Contact\Entity\Contact;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Actions\BaseAction;

class Action extends BaseAction
{
    const REFERENCE = 'contact';
    const EXISTS_MESSAGE = 'validation:add:message:UserExists';

    /**
     * Authenticate User.
     *
     * @param string $email    User Name.
     * @param string $password User Password.
     *
     * @return User
     */
    public function authenticate(string $email, string $password)
    {
        $user = new \GeoService\Bundles\Contact\Actions\Get(
            $this->getContainer()
        );
        $authenticated = $user->authenticate($email, $password);

        return $authenticated;
    }

    /**
     * Save User.
     *
     * @param array $args User Password.
     *
     * @return User
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Contact\Actions\Save(
            $this->getContainer()
        );

        $contact = $save->onUpdate($args);

        return $contact;
    }

    /**
     * Add User.
     *
     * @param array $args User.
     *
     * @return User
     */
    public function onAdd(array $args)
    {
        $add = new \GeoService\Bundles\Contact\Actions\Add(
            $this->getContainer()
        );

        $contact = $add->onAdd($args);

        return $contact;
    }

    /**
     * Delete User.
     *
     * @param array $args User ID.
     *
     * @return User
     */
    public function onDelete(array $args)
    {
        $delete = new \GeoService\Bundles\Contact\Actions\Delete(
            $this->getContainer()
        );

        $contact = $delete->onDelete($args);

        return $contact;
    }

    /**
     * Contact To Array.
     *
     * @param Contact $args Contact.
     *
     * @return Contact
     */
    public function contactToArray(Contact $args)
    {
        $contact = [
            'id' => $args->getId(),
            'entity' => $args->getEntity()->getId(),
            'role' => $args->getRole()->getId(),
            'enabled' => $args->getEnabled(),
            'locked' => $args->getLocked(),
            'username' => $args->getUsername(),
            'usersurname' => $args->getUsersurname(),
            'address' => $args->getAddress(),
            'city' => $args->getCity(),
            'state' => $args->getState(),
            'post_code' => $args->getPostCode(),
            'phone' => $args->getPhone(),
            'email' => $args->getEmail(),
            'website' => $args->getWebsite(),
            'facebook' => $args->getFacebook(),
            'twitter' => $args->getTwitter(),
            'logo' => $args->getLogo(),
            'abn' => $args->getEntity()->getIdentifier(),
            'token_char' => $args->getTokenChar(),
            'token_expiry' => $args->getTokenExpiry(),
        ];

        return $contact;
    }
}
