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

namespace GeoService\Bundles\Contact\Actions;

use Zend\Crypt\Password\Bcrypt;
use GeoService\Modules\Config\Config;
use GeoService\Bundles\Contact\Actions\Actions;
use GeoService\Bundles\Contact\Validation\Validation;
use GeoService\Modules\Base\Actions\BaseHydrate;

class Save extends Actions
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'contact';
    const KEY = 'id';
    const PASSWORD = 'password';
    const ABN = 'abn';
    
    /**
     * Save User
     *
     * @param array $args User Password.
     *
     * @return User
     */
    public function onUpdate(array $args)
    {
        if (!$this->formIsValid(
            $this->getValidator(),
            self::REFERENCE,
            'update',
            $args
        )) {
            $messages = $this->getValidator()->getMessagesAray();
            return $messages;
        }

        $entity = $this->get()->get(
            $this->getReference(),
            [self::KEY => $args[self::KEY]]
        );

        if ($entity && $entity->getId()) {
            if (isset($args[self::PASSWORD])) {
                $bcrypt = new Bcrypt();
                $password = $bcrypt->create($args[self::PASSWORD]);
                $args[self::PASSWORD] = $password;
            }

            $hydrate = new BaseHydrate($this->getContainer());
            
            $entity = $hydrate->hydrate($entity, $args);
        
            $entity->setRole($this->onAddRole($args));

            if ($args[self::ABN] && $this->formIsValid(
                $this->getValidator(),
                self::REFERENCE,
                'abn',
                $args
            )) {
                $entities = $this->onAddEntity($args);
                
                if ($entities) {
                    $entity->setEntity($entities);
                }
            } else {
                $messages = $this->getValidator()->getMessagesAray();
                return $messages;
            }

            $this->persistAndFlush($entity);
        }

        if ($entity->getId()) {
            $entity = $this->getEntityById(self::REFERENCE, self::KEY, $entity->getId());
            return $entity;
        }

        return false;
    }
}
