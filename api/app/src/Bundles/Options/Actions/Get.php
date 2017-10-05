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

namespace GeoService\Bundles\Options\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Options\Actions\Options;
use GeoService\Bundles\Options\Validation\Validation;

class Get extends Action
{
    const REFERENCE = 'options';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';
    
    /**
     * Get Roles
     *
     * @param array $args Role.
     *
     * @return Role
     */
    public function onGet(array $args)
    {
        if (isset($args[self::KEY])) {
            $validator = new Validation($this);
            
            if (!$this->formIsValid(
                $this->getValidator($validator),
                self::REFERENCE,
                'get',
                array(
                    self::KEY => $args[self::KEY],
                    'entity' => 'role'
                )
            )) {
                $messages = $this->getValidator($validator)->getMessagesAray();
                return $messages;
            }
        }
        
        return false;
    }
}
