<?php

namespace GeoService\Modules\Base\Interfaces;

use Zend\Validator\ValidatorChain;
use GeoService\Modules\Base\Interfaces\IBaseModel;

interface IBaseValidation
{
    public function __construct(IBaseModel $model);
    public function setModel(IBaseModel $model);
    public function getModel();
    public function setMessagesAray($error = null);
    public function getMessagesAray();
    public function isValid($value);
    public function formIsValid(array $fields, array $values);
    public function create();
    public function createValidators(array $fields, array $values);
    public function dispose();
}
