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
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Contact\Validation\Validation;

class Action extends BaseAction
{
    /**
     * Save Role
     *
     * @param array $args User Password.
     *
     * @return User
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Roles\Actions\Save(
            $this->getContainer()
        );
        
        $role = $save->onUpdate($args);

        return $role;
    }
    
    /**
     * Add Role
     *
     * @param array $args Role.
     *
     * @return Role
     */
    public function onAdd(array $args)
    {
        $add = new \GeoService\Bundles\Role\Actions\Add(
            $this->getContainer()
        );
        
        $role = $add->onAdd($args);

        return $role;
    }
    
    /**
     * Delete Role
     *
     * @param array $args Role ID.
     *
     * @return Role
     */
    public function onDelete(array $args)
    {
        $delete = new \GeoService\Bundles\Role\Actions\Delete(
            $this->getContainer()
        );
        
        $role = $delete->onDelete($args);

        return $role;
    }
}
