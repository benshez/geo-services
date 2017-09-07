<?php

namespace GeoService\Modules\Config;

use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Config as ServiceConfig;
use Zend\ServiceManager\ServiceManager;
use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;
use Zend\ServiceManager\Factory\InvokableFactory;
use \stdClass;

class ServiceManagerConfigurator
{
	public $pluginManagers = [
		'ValidatorManager'   => 'GeoService\Modules\Validators\ABN\AbnOrAcnValidator'
        //'ValidatorManager'   => 'Zend\Validator\ValidatorPluginManager'
	];
	
	public $configKeys = [
        'validators'      => 'ValidatorManager'
	];

	protected $container;

	// Main method that gives us back a configured ServiceManager
	public function createServiceManager(array $config)
	{
		// create ServiceManager
		$serviceManager = new ServiceManager();
		// set an initializer for ServiceLocatorAwareInterface
		$serviceManager->addInitializer(
			function ($instance, ServiceLocatorInterface $serviceLocator) {
				if ($instance instanceof ServiceLocatorAwareInterface) {
					$instance->setServiceLocator($serviceLocator);
				}
			}
		);
		// add $serviceManger to the config keys so we can configure it
		$this->configKeys = ['service_manager' => $serviceManager]
							+ $this->configKeys;

		// add the pluginManagers to the ServiceManager
		foreach ($this->pluginManagers as $key => $className) {
			$serviceManager->setInvokableClass($key, $className);
		}

		
		//$validatorManager = $serviceManager->get('ValidatorManager');
		//$validatorManager->configure($config['validators']);
        // $vhConfig = new \Zend\Form\View\HelperConfig;
        // $vhConfig->configureServiceManager($validatorManager);
		// apply configuration
		//$validators = $serviceManager->get('ValidatorManager');
		//$chain      = new \Zend\Validator\ValidatorChain();
		//$chain->setPluginManager($validators);

		$this->applyConfig($serviceManager, $config);
		return $serviceManager;
	}
	// Helper method to apply config to the service manager and all plugins
	public function applyConfig($serviceManager, $config)
	{
		foreach ($this->configKeys as $keyName => $thisManager) {
			$smConfig = array();
			if (isset($config[$keyName]) && is_array($config[$keyName])) {
				$smConfig = $config[$keyName];
			}
			
			// Get this service manager from the main service manager if it
			// isn't an instance already
			if (!$thisManager instanceof ServiceManager) {
				$thisManager = $serviceManager->get($thisManager);
			}

			// if ($thisManager instanceof \Interop\Container\ContainerInterface) {
			// 	$thisManager = $serviceManager->get($this->container);
			// }

			// Apply the config to this service manager
			$serviceConfig = new ServiceConfig($smConfig);
			$serviceConfig->configureServiceManager($thisManager);
		}
	}
}
