<?php

namespace GeoService\Modules\Config;

use Symfony\Component\Yaml\Yaml as SymfonyYaml;
use Zend\Config\Factory;
use Zend\Config\Reader\Yaml as YamlConfig;

class Config
{
    protected $path = __DIR__ .'/../../../../config/environments/';
    protected $settings;

    public function __construct(\Slim\Collection $settings = null)
    {
        if ($settings != null) {
            $this->settings = $settings;
        }
    }
    
    public function getConfig()
    {
        $reader = new YamlConfig([\Symfony\Component\Yaml\Yaml::class, 'parse']);
        $mode = $reader->fromFile($this->path.'parameters.yaml');
        $config['settings'] = $reader->fromFile($this->path.$mode['mode'].'/parameters.yaml');
        return $config;
    }

    public function getConfigSetting(\Slim\Collection $settings, $path)
    {
        $path = explode(':', $path);

        foreach ($path as $key => $part) {
            $settings = $settings[$part];
        }

        return $settings;
    }
    
    
    public function getOptionsPaths()
    {
        return array('name' => 'entities:%s:name',
        'arguments' => 'entities:%s:arguments:',
        'validators' => 'entities:%s:methods:validation:',
        'messages' => 'entities:%s:messages:');
    }

    public function getOption($option, $class, $extention = '')
    {
        return $this->getConfigSetting(
            $this->getSettings(),
            sprintf($this->getOptionsPaths()[$option], $class).$extention
        );
    }


    /**
     * Today Formatted To Year Month Day
     *
     * @return Today Formatted
     */
    public static function currentDateYearMonthDay()
    {
        $currDate = date('Y-m-d');
        return $currDate;
    }
 
    /**
     * Current Time Zone
     *
     * @return Current Time Zone
     */
    public function getDateTimeForZone()
    {
        $timeZone = new \DateTime('now', new \DateTimeZone($this->settings['time_zone']));
        return $timeZone;
    }
    
    public function getDateTimeNow()
    {
        return new \DateTime('now', new \DateTimeZone($this->getSettings()['time_zone']));
    }

    public function getDateTimeFuture(String $days)
    {
        return $this->getDateTimeNow()->add(new \DateInterval('P'.$days.'D'));
    }

    private function getSettings()
    {
        return $this->settings;
    }
}
