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

namespace GeoService\Bundles\Industries\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Industries\Actions\Action;
use GeoService\Bundles\Industries\Validation\Validation;

class Get extends Action
{
    const REFERENCE = 'industries';
    const REFERENCE_OBJECT = 'name';
    const DESCRIPTION = 'description';
    
    /**
     * Find Industries
     *
     * @param array $args Industry.
     *
     * @return Industry
     */
    public function autoComplete($args)
    {
        if (!$this->formIsValid(
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            'autocomplete',
            [self::DESCRIPTION => $args]
        )) {
            return $this->getValidator()->getMessagesAray();
        }
        
        return $this->getEntityManager()
        ->getRepository($this->getConfig()->getOption(
            'name',
            self::REFERENCE
        ), [[self::DESCRIPTION => $args]])
        ->findOneByAutoComplete([self::DESCRIPTION => $args]);
    }
}
