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

namespace GeoService\Bundles\Options\Actions;

use Zend\Crypt\Password\Bcrypt;
use GeoService\Modules\Config\Config;
use GeoService\Bundles\Options\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Options\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'options';

    /**
     * Save Options
     *
     * @param array $args Options.
     *
     * @return Options
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
        
        
        return false;
    }
}
