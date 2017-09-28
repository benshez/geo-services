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

namespace GeoService\Bundles\Pages\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Pages\Actions\Action;
use GeoService\Bundles\Pages\Validation\Validation;

class Delete extends Action
{
    const REFERENCE = 'pages';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';

    /**
     * Delete Pages
     *
     * @param array $args Pages.
     *
     * @return Pages
     */
    public function onDelete(array $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(new Validation($this)),
            self::REFERENCE,
            'delete',
            $args
        )) {
            $messages = $this->getValidator($validator)->getMessagesAray();
            return $messages;
        }
        
        $page = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args]
        );
  
        if (!$page) {
            return false;
        }

        if (!$page->getEnabled()) {
            $this->onBaseActionDelete()->delete($page);
        } else {
            $this->onBaseActionSave()->disable($page);
        }
        
        return false;
    }
}
