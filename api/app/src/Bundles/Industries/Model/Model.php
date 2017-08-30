<?php

namespace GeoService\Bundles\Industries\Model;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Industries\Interfaces\IIndustriesModel;
use GeoService\Bundles\Industries\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;
use GeoService\Bundles\Industries\Entity\Industries;

class Model extends BaseModel implements IIndustriesModel
{
    protected $validator = null;
	protected $getArgs = array();

    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
    public function autoComplete($description)
    {
		$this->getArgs = $this->getConfig()
		->getOption('arguments', 'industries', 'autocomplete');

		$this->getArgs['description'] = $description;
		
		if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
		}
		
        return $this->getEntityManager()
        ->getRepository($this->getConfig()->getOption(
			'name',
			'industries'
		), [$this->getArgs])
        ->findOneByAutoComplete($this->getArgs);
	}
	
	public function onAdd($description)
	{
		$this->getArgs = $this->getConfig()
		->getOption('arguments', 'industries', 'autocomplete');

		$this->getArgs['description'] = $description;
		
		if (!$this->formIsValid()) {
            return $this->getValidator()->getMessagesAray();
		}

		$entity = new Industries();
		$date = new \DateTime();
		$entity->setCreatedAt($date);
		$entity->setUpdatedAt($date);
		$entity->setDescription($description['description']);

		$this->getEntityManager()->persist($entity);
		$this->getEntityManager()->flush($entity);
	}

	public function onUpdate($id, $description)
	{
		$date = new \DateTime();

		$entity = $this->getEntityManager()->find(Industries::class, $id);
		$entity->setDescription($description['description']);
		$entity->setUpdatedAt($date);

		$this->getEntityManager()->persist($entity);
		$this->getEntityManager()->flush();
	}

	private function formIsValid()
    {
        $validators = $this->getConfig()->getOption('validators', 'industries', 'autocomplete');
        
        return $this->getValidator()->formIsValid(
			$validators,
			[$this->getArgs['description'],
			$this->getArgs['description']]
		);
    }
}
