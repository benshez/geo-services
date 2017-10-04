<?php
/**
 * Save File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  Save
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Roles\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Roles\Entity\Roles;
use GeoService\Bundles\Roles\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Roles\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'roles';
    const KEY = 'id';
    
    /**
     * Add Roles
     *
     * @param array $args Industry.
     *
     * @return Roles
     */
    public function onAdd(array $args)
    {
        $validator = new Validation($this);

        if (!$this->formIsValid(
            $this->getValidator($validator),
            self::REFERENCE,
            'add',
            $args
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }

        $role = new Roles();
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $role = $this->onBaseActionSave()->save(
            $hydrate->hydrate($role, $args)
        );

        if (!$role) {
            return false;
        }
        
        if ($role->getId()) {
            $role = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $role->getId()]
            );
            return $role;
        }

        return false;
    }
}
