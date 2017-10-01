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

namespace GeoService\Bundles\Locations\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Locations\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Locations\Validation\Validation;

class Save extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'locations';
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
        $validator = new Validation($this);

        if (!$this->formIsValid(
            $this->getValidator($validator),
            self::REFERENCE,
            'update',
            $args
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }

        $location = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args[self::KEY]]
        );
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $location = $hydrate->hydrate($location, $args);
        
        if ($location->getId()) {
            $location = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $location->getId()]
            );
            return $location;
        }

        return false;
    }
}
