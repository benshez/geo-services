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

namespace GeoService\Bundles\Contact\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Bundles\Contact\Validation\Validation;

class Actions extends BaseAction
{
    const REFERENCE_OBJECT = 'name';
    const REFERENCE = 'contact';
    
    private $_validator = null;
    private $_baseGet = null;
    private $_baseSave = null;
    private $_baseReference = null;
    /**
     * Authenticate User Validator
     *
     * @return validator
     */
    public function getValidator()
    {
        $this->_validator = (!$this->_validator) ?
        new Validation($this) :
        $this->_validator;
        
        return $this->_validator;
    }
    
    /**
     * Base Get
     *
     * @return BaseGet
     */
    public function get()
    {
        $this->_baseGet = (!$this->_baseGet) ?
        new \GeoService\Modules\Base\Actions\BaseGet(
            $this->getContainer()
        ) :
        $this->_baseGet;
        
        return $this->_baseGet;
    }
     
    /**
     * Base Get Reference
     *
     * @return BaseReference
     */
    public function getReference()
    {
        $this->_baseReference = $this->getConfig()->getOption(
            self::REFERENCE_OBJECT,
            self::REFERENCE
        );

        return $this->_baseReference;
    }
        
    /**
     * Base Save
     *
     * @return BaseGet
     */
    public function save()
    {
        $this->_baseSave = (!$this->_baseSave) ?
        new \GeoService\Modules\Base\Actions\BaseSave(
            $this->getContainer()
        ) :
        $this->_baseSave;
        
        return $this->_baseSave;
    }
    /**
     * Authenticate User
     *
     * @param string $email    User Name.
     *
     * @param string $password User Password.
     *
     * @return User
     */
    public function authenticate(string $email, string $password)
    {
        $user = new \GeoService\Bundles\Contact\Actions\Get(
            $this->getContainer()
        );
        $authenticated =  $user->authenticate($email, $password);
        return $authenticated;
    }
    
    /**
     * Save User
     *
     * @param array $args User Password.
     *
     * @return User
     */
    public function onUpdate(array $args)
    {
        $save = new \GeoService\Bundles\Contact\Actions\Save(
            $this->getContainer()
        );
        
        $user = $save->onUpdate($args);

        return $user;
    }
}
