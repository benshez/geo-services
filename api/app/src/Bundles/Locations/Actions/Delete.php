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

namespace GeoService\Bundles\Locations\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Locations\Actions\Action;
use GeoService\Bundles\Locations\Validation\Validation;

class Delete extends Action
{
    const REFERENCE = 'locations';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';

    /**
     * Delete Locations
     *
     * @param array $args Locations.
     *
     * @return Locations
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
        
        $location = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            array(self::KEY => $args[self::KEY])
        );
  
        if (!$location) {
            return false;
        }

        $this->onBaseActionDelete()->delete($location);
        
        return false;
    }
}
