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

use Zend\Crypt\Password\Bcrypt;
use GeoService\Modules\Config\Config;
use GeoService\Bundles\Locations\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Locations\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'locations';
    const KEY = 'id';
    const PASSWORD = 'password';
    const ABN = 'abn';
    const EMAIL = 'email';
    
    /**
     * Save Locations
     *
     * @param array $args Locations.
     *
     * @return Locations
     */
    public function onAdd(array $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            'add',
            $args
        )) {
            $messages = $this->getValidator()->getMessagesAray();
            return $messages;
        }

        $locations = new \GeoService\Bundles\Locations\Entity\Locations();
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $locations = $hydrate->hydrate($locations, $args);
        
        if ($locations->getId()) {
            $locations = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $locations->getId()]
            );
            return $locations;
        }

        return false;
    }
}
