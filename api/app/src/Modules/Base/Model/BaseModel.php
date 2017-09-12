<?php

namespace GeoService\Modules\Base\Model;

use \ReflectionObject;
use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Util\Inflector;
use Interop\Container\ContainerInterface;
use GeoService\Modules\Config\Config;

class BaseModel
{
    protected $container = null;
    protected $manager = null;
    protected $config = null;
    protected $settings = null;
    protected $validator = null;

    public function __construct(ContainerInterface $container)
    {
        $this->setContainer($container);
    }
    
    private function updatedTimestamps($entity)
    {
        $date = new \DateTime('now', new \DateTimeZone($this->settings['time_zone']));

        $entity->setUpdatedAt($date);
    
        if ($entity->getCreatedAt() === 'CURRENT_TIMESTAMP' ||
            $entity->getCreatedAt() === null) {
            $entity->setCreatedAt($date);
        }
    }

    private function flushEntity($entity)
    {
        $this->getEntityManager()->flush($entity);
	}
	
    public function get($sender, array $args)
    {
        if ($args === null) {
            $configs = $this->getEntityManager()->getRepository($sender)->findAll();

            $configs = array_map(function ($config) {
                return $config;
            }, $configs);

            return $configs;
        } else {
            $config = $this->getEntityManager()->getRepository($sender)->findOneBy($args);
            
            if ($config) {
                return $config;
            }
        }

        return false;
    }

    public function getContainer()
    {
        return $this->container;
    }

    public function setContainer(ContainerInterface $container)
    {
        $this->container = $container;
        $this->setEntityManager();
    }

    public function getEntityManager()
    {
        return $this->manager;
    }

    public function setEntityManager()
    {
        $this->manager = $this->container->get('em');
    }

    public function getConfig()
    {
        $this->config = (!$this->config) ? new Config($this->getSettings()) : $this->config;
        return $this->config;
    }

    public function getSettings()
    {
        $this->settings = (!$this->settings) ? $this->getContainer()->get('settings') : $this->settings;
        return $this->settings;
    }

    public function removeAndFlush($entity)
    {
        $this->getEntityManager()->remove($entity);
        $this->flushEntity($entity);
    }
    
    public function persistAndFlush($entity)
    {
        $this->updatedTimestamps($entity);

        try {
            $this->getEntityManager()->persist($entity);
            $this->flushEntity($entity);
        } catch (\Doctrine\DBAL\Exception\UniqueConstraintViolationException $e) {
            return false;
        }
    }

    public function formIsValid($validator, String $class, String $extention, array $fields)
    {
        $validators = $this->getConfig()->getOption('validators', $class, $extention);
        return $validator->formIsValid(
            $validators,
            $fields
        );
    }
    
    public function getEntityById($class, $key, $id)
    {
        return $this->get($this->getConfig()->getOption(
            'name',
            $class
        ), [$key => $id]);
	}
	
	public function hydrateEntity($entityClass, array $data)
	{
		$object = $entityClass;
		$refObj = new \ReflectionObject($object);
		$reader = new AnnotationReader();
		$columns = array_column($refObj->getProperties(), 'name');
		
		foreach ($data as $key => $property) {
			$setter = sprintf('set%s', ucfirst(Inflector::camelize($key)));
			$column = array_search($key, $columns);
			$annotation = $reader->getPropertyAnnotation(
				$refObj->getProperties()[$column],
				'Doctrine\ORM\Mapping\Column'
			);
			
			if ($annotation && method_exists($object, $setter)) {
				if (isset($data[$key])) {
					$object->$setter($data[Inflector::tableize($annotation->name)]);
				}
            }
		}

		return $object;
	}
}
