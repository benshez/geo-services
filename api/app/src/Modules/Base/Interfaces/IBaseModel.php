<?php

namespace GeoService\Modules\Base\Interfaces;

use Interop\Container\ContainerInterface;

interface IBaseModel
{
    public function __construct(ContainerInterface $container);
    public function get($sender, array $args);
    public function setContainer(ContainerInterface $container);
    public function getContainer();
    public function setEntityManager();
	public function getEntityManager();
	public function persistAndFlush($entity);
	public function removeAndFlush($entity);
    public function getConfig();
	public function getSettings();
	public function formIsValid($validator, String $class, String $extention, array $fields);
	public function getEntityById($class, $key, $id);
}
