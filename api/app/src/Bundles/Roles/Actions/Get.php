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

namespace GeoService\Bundles\Roles\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Roles\Actions\Action;
use GeoService\Bundles\Roles\Validation\Validation;

class Get extends Action
{
    const REFERENCE = 'roles';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';
    
    /**
     * Authenticate Roles
     *
     * @param array $role Role.
     *
     * @return Role
     */
    public function onGet(array $role)
    {
        if (isset($role[self::KEY])) {
            $validator = new Validation($this);
            
            if (!$this->formIsValid(
                $this->getValidator($validator),
                self::REFERENCE,
                'get',
                array(
                    self::KEY => $role[self::KEY],
                    'sender' => 'role'
                )
            )) {
                $messages = $this->getValidator($validator)->getMessagesAray();
                return $messages;
            }
        }

        $key = isset($role[self::KEY]) ? $role[self::KEY] : null;
        
        $role = $this->onBaseActionGet()->getPaged(
            $this->getReference(self::REFERENCE),
            array(
                'key' => self::KEY,
                'value' => $key,
                'offset' => $role['offset']
            )
        );

        return ($role);
    }
}
