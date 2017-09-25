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

    private $_container = null;
    private $_manager = null;
    private $_config = null;
    private $_settings = null;

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
        $this->_config = (!$this->_config) ?
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
        $this->_settings = (!$this->_settings) ?
        $this->getContainer()->get(self::SETTINGS) :
        $this->_settings;
        return $this->_settings;
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
                $values[] = $args[$key];
            }
        }

        $isValid = $validator->formIsValid(
            $fields,
            $values
        );
        
        return $isValid;
    }
}
