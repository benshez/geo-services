<?php
/**
 * Delete File Doc Comment
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

class Delete extends Action
{
    const REFERENCE = 'roles';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';

    /**
     * Delete Roles
     *
     * @param array $args Roles.
     *
     * @return Roles
     */
    public function onDelete(array $args)
    {
        $validator = new Validation($this);

        if (!$this->formIsValid(
            $this->getValidator($validator),
            self::REFERENCE,
            'delete',
            $args
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }
        
        $role = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args]
        );
  
        if (!$role) {
            return false;
        }

        if (!$role->getEnabled()) {
            $this->onBaseActionDelete()->delete($role);
        } else {
            $this->onBaseActionSave()->disable($role);
        }
        
        return false;
    }
}
