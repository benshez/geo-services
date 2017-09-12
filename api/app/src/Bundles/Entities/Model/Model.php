<?php

namespace GeoService\Bundles\Entities\Model;

use Zend\Crypt\Password\Bcrypt;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use GeoService\Bundles\Entities\Entity\Entities;
use GeoService\Bundles\Entities\Interfaces\IEntitiesModel;
use GeoService\Bundles\Entities\Validation\Validation;
use GeoService\Modules\Base\Model\BaseModel;

class Model extends BaseModel implements IEntitiesModel
{
	const KEY = 'id';
	const ABN = 'abn';

    protected $validator = null;
    
    private function getValidator()
    {
        $this->validator = (!$this->validator) ? new Validation($this) : $this->validator;
        return $this->validator;
	}
	
	public function onAdd($args)
	{
		
	}

	public static function onAddEntity($args)
    {
        $entities = $this->getEntityById('entities', 'identifier', $args[self::ABN]);

        if (!$entities) {
			$abnlookup = new AbnLookup($this->getSettings());
			$this->business = $abnlookup->searchByAbn($args[self::ABN]);
			$this->business = $this->business->ABRPayloadSearchResults->response->businessEntity201408;

			$config = new Config($this->getSettings());
			$days = $this->getSettings()['trial_period'];

            if (isset($this->business->legalName) || isset($this->business->mainName)) {
				$entitiesName = isset($this->business->legalName) ?
				$this->business->legalName->givenName.','. $this->business->legalName->familyName :
				$this->business->mainName->organisationName;

                $entities = new Entities();
                $entities->setEnabled(1);
                $entities->setIdentifier($this->business->ABN->identifierValue);
                $entities->setStatus($this->business->entityStatus->entityStatusCode);
                $entities->setExpiresAt($config->getDateTimeFuture($days));
				$entities->setName($entitiesName);
               
                if (isset($this->business->mainBusinessPhysicalAddress)) {
                    $entities->setState($this->business->mainBusinessPhysicalAddress->stateCode);
                    $entities->setPostCode($this->business->mainBusinessPhysicalAddress->postcode);
                } else {
                    $entities->setState('N/A');
                    $entities->setPostCode('N/A');
                }

                if ($this->business->entityType->entityTypeCode) {
                    $entities->setIndustry($this->onAddIndustry($args));
                }
            
                $this->persistAndFlush($entities);

                $entities = $this->getEntityById('entities', self::KEY, $entities->getId());
            }
        }

        return $entities;
    }
}
