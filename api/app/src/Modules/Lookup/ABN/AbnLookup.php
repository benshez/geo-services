<?php

namespace GeoService\Modules\Lookup\ABN;

class AbnLookup extends \SoapClient
{
    private $guid = '';
    
    public function __construct($settings)
    {
        $this->guid = $settings['guid'];

        $params = array(
            'soap_version' => SOAP_1_1,
            'exceptions' => true,
            'trace' => 1,
            'cache_wsdl' => WSDL_CACHE_NONE
        );

        parent::__construct($settings['url'], $params);
    }

    public function searchByAbn($abn, $historical = 'N')
    {
        $params = new \stdClass();
        $params->searchString = $abn;
        $params->includeHistoricalDetails = $historical;
		$params->authenticationGuid = $this->guid;
		
        return $this->ABRSearchByABN($params);
    }
}
