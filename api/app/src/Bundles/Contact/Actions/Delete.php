<?php

/**
 * This file is part of the GeoService API.
 *
 * PHP Version 7.1.9
 *
 * @category  GeoService
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Contact\Actions;

use GeoService\Bundles\Contact\Validation\Validation;

class Delete extends Action
{
    const REFERENCE = 'contact';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';

    /**
     * Delete Industries.
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

        $contact = $this->onBaseActionGet()->get(
            $this->getReference(self::REFERENCE),
            [self::KEY => $args]
        );

        if (!$contact) {
            return false;
        }

        if (!$contact->getEnabled()) {
            $this->onBaseActionDelete()->delete($contact);
        } else {
            $this->onBaseActionSave()->disable($contact);
        }

        return false;
    }
}
