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

namespace GeoService\Modules\Base\Options;

use GeoService\Modules\Base\Interfaces\IBaseOptions;

class BaseOptions implements IBaseOptions
{
    private $_options = array('part' => '', 'class' => '', 'extention' => '');

    /**
     * Ctor Options
     *
     * @param array $options Options.
     *
     * @return void
     */
    public function __construct(array $options)
    {
        $this->setOptions($options);
    }
    
    /**
     * Set Options
     *
     * @param array $options Options.
     *
     * @return void
     */
    public function setOptions(array $options)
    {
        $this->_options = array_merge($this->_options, $options);
    }

    /**
     * Get Options
     *
     * @return array Options
	 */		
     public function getOptions()
     {
        $options = $this->_options;
        return $options;
     }   

    /**
     * Get Options
     *
     * @param string $option Option.
     *
     * @return Option
     */
    public function getOption(string $option)
    {
        $option = $this->_options[$option];
        return $option;
    }
}
