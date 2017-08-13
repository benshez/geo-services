<?php

namespace GeoService\Modules\Base;

class BaseConstants
{
	
	const USERS_ENTITY = '\GeoService\Bundles\Users\Entity\Users';
	const INDUSTRIES_ENTITY = '\GeoService\Bundles\Industries\Entity\Industries';
	const LOCATIONS_ENTITY = '\GeoService\Bundles\Locations\Entity\Locations';
	const SUPPLIERS_ENTITY = '\GeoService\Bundles\Suppliers\Entity\Suppliers';
	const CONTACT_ENTITY = '\GeoService\Bundles\Contact\Entity\Contact';
	const USER_CREDENTIALS_INVALID = 'Invalid user name or password.';
	const USER_ACCOUNT_DISABLED_FLAG = false;
	const USER_ACCOUNT_DISABLED = 'User account is not enabled.';
	const FIND_BY_ONE_KEY_EMAIL = 'email';
	const FIND_BY_ID = 'id';
	const FIND_USERS_BY_INDUSTRY = 'industryId';
	const FIND_LOCATIONS_BY_USERS = 'userId';
	const INDUSTRY_INVALID = 'No industries found with that description.';

	public static $USERS_ENTITY = BaseConstants::USERS_ENTITY;
	public static $INDUSTRIES_ENTITY = BaseConstants::INDUSTRIES_ENTITY;
	public static $LOCATIONS_ENTITY = BaseConstants::LOCATIONS_ENTITY;
	public static $SUPPLIERS_ENTITY = BaseConstants::SUPPLIERS_ENTITY;
	public static $CONTACT_ENTITY = BaseConstants::CONTACT_ENTITY;
	public static $USER_CREDENTIALS_INVALID = array('InvalidCredentials' => BaseConstants::USER_CREDENTIALS_INVALID);
	public static $FIND_BY_ONE_KEY_EMAIL = BaseConstants::FIND_BY_ONE_KEY_EMAIL;
	public static $FIND_BY_ID = BaseConstants::FIND_BY_ID;
	public static $FIND_USERS_BY_INDUSTRY = BaseConstants::FIND_USERS_BY_INDUSTRY;
	public static $FIND_LOCATIONS_BY_USERS = BaseConstants::FIND_LOCATIONS_BY_USERS;
	public static $INDUSTRY_INVALID = BaseConstants::INDUSTRY_INVALID;
}
