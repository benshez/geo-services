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

namespace GeoService\Bundles\Entities\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Entities\Actions\Action;
use GeoService\Bundles\Entities\Validation\Validation;

class Delete extends Action
{
    const REFERENCE = 'entities';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';

    /**
     * Delete Industries
     *
     * @param array $args Industry.
     *
     * @return Industry
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
        
        $entity = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args]
        );
  
        if (!$entity) {
            return false;
        }

        if (!$entity->getEnabled()) {
            $this->onBaseActionDelete()->delete($entity);
        } else {
            $this->onBaseActionSave()->disable($entity);
        }
        
        return false;
    }
}
