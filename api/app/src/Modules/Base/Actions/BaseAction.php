<?php
/**
 * BaseAction File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseAction
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Modules\Base\Actions;

use \ReflectionObject;
use GeoService\Modules\Config\Config;
use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Interfaces\IBaseAction;

class BaseAction implements IBaseAction
{
    const SETTINGS = 'settings';
    const ENTITY_MANAGER = 'em';
    const VALIDATORS = 'validators';
    const REFERENCE_OBJECT = 'name';
    
    private $_validator = null;
    private $_container = null;
    private $_manager = null;
    private $_config = null;
    private $_settings = null;
    private $_baseReference = null;
    private $_baseGet = null;
    private $_baseSave = null;
    private $_baseDelete = null;
    
    /**
     * Initialise BaseAction To Set Container
     *
     * @param ContainerInterface $container ContainerInterface.
     *
     * @return void
     */
    public function __construct(ContainerInterface $container)
    {
        $this->setContainer($container);
    }
    
    /**
     * Get ContainerInterface
     *
     * @return ContainerInterface
     */
    public function getContainer()
    {
        return $this->_container;
    }
    
    /**
     * Set ContainerInterface
     *
     * @param ContainerInterface $container ContainerInterface.
     *
     * @return void
     */
    public function setContainer(ContainerInterface $container)
    {
        $this->_container = $container;
        $this->setEntityManager();
    }

    /**
     * Get EntityManager
     *
     * @return EntityManager
     */
    public function getEntityManager()
    {
        return $this->_manager;
    }

    /**
     * Set ContainerInterface
     *
     * @return void
     */
    public function setEntityManager()
    {
        $this->_manager = $this->_container->get(self::ENTITY_MANAGER);
    }

    /**
     * Get Config
     *
     * @return Config
     */
    public function getConfig()
    {
        $this->_config = (null === $this->_config) ?
        new Config($this->getSettings()) :
        $this->_config;
        return $this->_config;
    }

    /**
     * Get Settings
     *
     * @return Settings
     */
    public function getSettings()
    {
        $this->_settings = (null === $this->_settings) ?
        $this->getContainer()->get(self::SETTINGS) :
        $this->_settings;
        return $this->_settings;
    }
    
    /**
     * Base Get
     *
     * @return BaseGet
     */
    public function onBaseActionGet()
    {
        $this->_baseGet = (null === $this->_baseGet) ?
        new \GeoService\Modules\Base\Actions\BaseGet(
            $this->getContainer()
        ) :
        $this->_baseGet;
        
        return $this->_baseGet;
    }
    
    /**
     * Base Save
     *
     * @return BaseSave
     */
    public function onBaseActionSave()
    {
        $this->_baseSave = (null === $this->_baseSave) ?
        new \GeoService\Modules\Base\Actions\BaseSave(
            $this->getContainer()
        ) :
        $this->_baseSave;
        
        return $this->_baseSave;
    }
  
    /**
     * Base Delete
     *
     * @return BaseDelete
     */
    public function onBaseActionDelete()
    {
        $this->_baseDelete = (null === $this->_baseDelete) ?
        new \GeoService\Modules\Base\Actions\BaseDelete(
            $this->getContainer()
        ) :
        $this->_baseDelete;
        
        return $this->_baseDelete;
    }
    /**
     * Get FormIsValid
     *
     * @param ReflectionObject $validator Validator.
     * @param string           $class     Class.
     * @param string           $extention Class Extention.
     * @param array            $args      Args.
     *
     * @return IsValid
     */
    public function formIsValid(
        $validator,
        string $class,
        string $extention,
        array $args
    ) {
    
        $fields = $this->getConfig()
            ->getOption(self::VALIDATORS, $class, $extention);
        
        $values = array();

        foreach ($fields as $key => $field) {
            foreach ($field as $value) {
                if (isset($value[3]) && is_array($value[3])) {
                    $values[] = array(
                        $value[3][0] => $args[$value[3][0]],
                        $value[3][1] => $args[$value[3][1]]
                    );
                } else {
                    $values[] = $args[$key];
                }
            }
        }

        $isValid = $validator->formIsValid(
            $fields,
            $values
        );
        
        return $isValid;
    }
    
    /**
     * Validator
     *
    * @param \ReflectionObject $validatorClass Class.
     *
     * @return validator
     */
    public function getValidator($validatorClass)
    {
        $this->_validator = (!$this->_validator) ?
        $validatorClass :
        $this->_validator;
        
        return $this->_validator;
    }
    
    /**
     * Base Get Reference
     *
     * @param string $reference Reference.
     *
     * @return BaseReference
     */
    public function getReference(string $reference)
    {
        $this->_baseReference = $this->getConfig()->getOption(
            self::REFERENCE_OBJECT,
            $reference
        );

        return $this->_baseReference;
    }
}
