<?php

namespace GeoService\Modules\Validators\ABN;

class AbnOrAcnValidator
{
	public static function isValidAbnOrAcn($number)
	{
		$number = preg_replace('/\s/', '', $number);

		if (strlen($number) == 9) {
			return self::isValidAcn($number);
		}

		if (strlen($number) == 11) {
			return self::isValidAbn($number);
		}

		return false;
	}

	public static function isValidAbn($abn)
	{
		$weights = array(10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19);

		$abn = preg_replace('/\s/', '', $abn);

		if (strlen($abn) != 11) {
			return false;
		}

		$abn[0] = ((int)$abn[0] - 1);

		$sum = 0;
		foreach (str_split($abn) as $key => $digit) {
			$sum += ($digit * $weights[$key]);
		}
		if (($sum % 89) != 0) {
			return false;
		}
		
		return true;
	}

	public static function isValidAcn($acn)
	{
		$weights = array(8, 7, 6, 5, 4, 3, 2, 1, 0);

		$acn = preg_replace('/\s/', '', $acn);

		if (strlen($acn) != 9) {
			return false;
		}

		$sum = 0;
		foreach (str_split($acn) as $key => $digit) {
			$sum += $digit * $weights[$key];
		}

		$remainder = $sum % 10;

		$complement = (string)(10 - $remainder);
		if ($complement === "10") {
			$complement = "0";
		}

		return ($acn[8] === $complement);
	}
}
/**
* AbnValidator::isValidAbn('53 004 085 616'); // -> true
* AbnValidator::isValidAbn('0'); // -> false
* AbnValidator::isValidAcn('005 749 986'); // -> true
* AbnValidator::isValidAcn('53 004 085 616'); // -> false  (that's an ABN!)
* AbnValidator::isValidAbnOrAcn('53 004 085 616'); // -> true
* AbnValidator::isValidAbnOrAcn('005 749 986'); // -> true
* AbnValidator::isValidAbnOrAcn('0'); // -> false
*/
