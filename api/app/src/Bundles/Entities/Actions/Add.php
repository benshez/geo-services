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

namespace GeoService\Bundles\Entities\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Entities\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Entities\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'entities';
    const KEY = 'id';
    
    /**
     * Save Role
     *
     * @param array $args Role.
     *
     * @return Role
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

        $industry = new \GeoService\Bundles\Entities\Entity\Entities();
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $industry = $hydrate->hydrate($industry, $args);
        
        if ($industry->getId()) {
            $industry = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $industry->getId()]
            );
            return $industry;
        }

        return false;
    }
}
