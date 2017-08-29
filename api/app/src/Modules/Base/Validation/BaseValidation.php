<?php

namespace GeoService\Modules\Base\Validation;

use Zend\Validator;
use Zend\Validator\ValidatorChain;
use Zend\Validator\ValidatorInterface;
use GeoService\Modules\Base\Interfaces\IBaseValidation;
use GeoService\Modules\Base\Interfaces\IBaseModel;
use GeoService\Modules\Config\Config;

class BaseValidation implements
    ValidatorInterface,
    IBaseValidation
{
    protected $validator = null;
    protected $validators = array();
    protected $error = null;
    protected $settings = null;
    protected $config = null;

    public function __construct(IBaseModel $model)
    {
        $this->setModel($model);
    }

    public function setModel(IBaseModel $model)
    {
        $this->model = $model;
    }

    public function getModel()
    {
        return $this->model;
    }

    public function getMessages()
    {
        return $this->validator->getMessages();
    }

    public function getMessagesAray()
    {
        return $this->error;
    }

    public function setMessagesAray($error = null, $key = null)
    {
        if ($key) {
            $this->config = (!$this->config) ? new Config() : $this->config;
            $error = $this->config($this->getModel()->getSettings(), $key);
        }
        
        $this->error = array('error' => true,  'message' => $error);
    }

    public function isValid($value)
    {
        $valid = $this->validator->isValid($value);

        if (!$valid) {
            $this->setMessagesAray($this->getMessages());
        }

        return $valid;
    }

    public function formIsValid(array $fields, array $values)
    {
        $this->validators = array();
        $this->createValidators($fields, $values);
        $isValid = true;

        foreach ($this->validators as $index => $validator) {
            $value = (sizeof($values) === 1) ? $values : $values[$index];
            $isValid = $validator->isValid($value);

            if (!$isValid) {
                $this->setMessagesAray($validator->getMessages());
                return $isValid;
            }
        }

        return $isValid;
    }

    public function create()
    {
        $this->validator = new ValidatorChain();
    }
    
    public function createValidators(array $fields, array $values)
    {
        foreach ($fields as $index => $validators) {
            $this->create();

            foreach ($validators as $validator) {
                $name = (sizeof($validators) === 1) ? $validator : $validator[0];
                $options = [];

                if (sizeof($validators) > 1) {
                    if (isset($validator[1])) {
                        foreach ($validator[1] as $opt => $option) {
                            if (isset($option[key($option)])) {
                                $key = key($option);
                                $options[$key] = $option[$key];
                            }
                        }
                    }

                    $break = isset($validator[2]) ? $validator[2] : null;
				}
				
                switch (sizeof($validator)) {
                    case 2:
                        $this->validator->attachByName($name, $options);
                        break;
                    case 3:
                        $this->validator->attachByName($name, $options, $break);
                        break;
                    default:
                        $this->validator->attachByName($name);
                        break;
                }
            }

            $this->validators[$index] = $this->validator;
            $this->dispose();
        }
    }

    public function dispose()
    {
        $this->validator = null;
    }
}
