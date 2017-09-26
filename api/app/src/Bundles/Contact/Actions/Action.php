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
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Contact\Validation\Validation;

class Action extends BaseAction
{
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
        $user = new \GeoService\Bundles\Contact\Actions\Get(
            $this->getContainer()
        );
        $authenticated =  $user->authenticate($email, $password);
        return $authenticated;
    }
    
    /**
     * Save User
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
}
