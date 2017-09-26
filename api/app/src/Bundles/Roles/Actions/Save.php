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
use GeoService\Bundles\Roles\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Roles\Validation\Validation;

class Save extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'roles';
    const KEY = 'id';
    
    /**
     * Save Role
     *
     * @param array $args Role.
     *
     * @return Role
     */
    public function onUpdate(array $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            'update',
            $args
        )) {
            $messages = $this->getValidator()->getMessagesAray();
            return $messages;
        }

        $role = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args[self::KEY]]
        );
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $role = $hydrate->hydrate($role, $args);
        
        if ($role->getId()) {
            $role = $this->get()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $role->getId()]
            );
            return $role;
        }

        return false;
    }
}
