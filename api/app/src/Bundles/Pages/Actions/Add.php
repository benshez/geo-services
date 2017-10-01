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

namespace GeoService\Bundles\Pages\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Pages\Entity\Pages;
use GeoService\Bundles\Pages\Actions\Action;
use GeoService\Modules\Base\Actions\BaseHydrate;
use GeoService\Bundles\Pages\Validation\Validation;

class Add extends Action
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'pages';
    const KEY = 'id';
    
    /**
     * Add Pages
     *
     * @param array $args Industry.
     *
     * @return Pages
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

        $page = new Pages();
        
        $hydrate = new BaseHydrate($this->getContainer());
        
        $page = $hydrate->hydrate($page, $args);
        
        if ($page->getId()) {
            $page = $this->onBaseActionGet()->get(
                $this->getReference(self::REFERENCE),
                [self::KEY => $page->getId()]
            );
            return $page;
        }

        return false;
    }
}
