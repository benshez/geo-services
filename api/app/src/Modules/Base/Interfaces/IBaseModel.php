<?php

namespace GeoService\Modules\Base\Interfaces;

use \Interop\Container\ContainerInterface;

interface IBaseModel
{
	public function __construct(ContainerInterface $container);

	public function get();

	public function setContainer(ContainerInterface $container);

	public function getContainer();
	
	public function setEntityManager();

	public function getEntityManager();

	public function setValidator();

	public function getValidator();

	public function setCriteria(array $criteria);

	public function getCriteria();

	public function getClass();

	public function getMessagePart();

	public function getNotFoundMessageFromConfig($path);
}
