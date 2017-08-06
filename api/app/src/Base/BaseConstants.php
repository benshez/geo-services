<?php

namespace GeoService\Base;

class BaseConstants
{
	
	const USERS_ENTITY = '\GeoService\Users\Entity\Users';
	const INDUSTRIES_ENTITY = '\GeoService\Industries\Entity\Industries';
	const LOCATIONS_ENTITY = '\GeoService\Locations\Entity\Locations';
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
	public static $USER_CREDENTIALS_INVALID = array('InvalidCredentials' => BaseConstants::USER_CREDENTIALS_INVALID);
	public static $FIND_BY_ONE_KEY_EMAIL = BaseConstants::FIND_BY_ONE_KEY_EMAIL;
	public static $FIND_BY_ID = BaseConstants::FIND_BY_ID;
	public static $FIND_USERS_BY_INDUSTRY = BaseConstants::FIND_USERS_BY_INDUSTRY;
	public static $FIND_LOCATIONS_BY_USERS = BaseConstants::FIND_LOCATIONS_BY_USERS;
	public static $INDUSTRY_INVALID = BaseConstants::INDUSTRY_INVALID;
}
