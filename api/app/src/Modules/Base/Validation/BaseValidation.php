<?php

namespace GeoService\Modules\Base\Validation;

use Zend\Validator;
use Zend\Validator\ValidatorChain;
use Zend\Validator\ValidatorInterface;
use GeoService\Modules\Base\Interfaces\IBaseValidation;
use GeoService\Modules\Base\Interfaces\IBaseAction;
use GeoService\Modules\Config\Config;
use GeoService\Modules\Validators\ABN\AbnOrAcnValidator;

class BaseValidation implements
    ValidatorInterface,
    IBaseValidation
{
    protected $validator = null;
    protected $validators = array();
    protected $error = null;
    protected $settings = null;
    protected $config = null;
    private $_action = null;

    public function __construct(IBaseAction $action)
    {
        $this->setAction($action);
    }

    public function setAction(IBaseAction $action)
    {
        $this->_action = $action;
    }

    public function getAction()
    {
        return $this->_action;
    }

    public function getMessages()
    {
        return $this->validator->getMessages();
    }

    public function getMessagesAray()
    {
        return $this->error;
    }

    public function setMessagesArray($error = null, $class = null, $key = null)
    {
        if ($key) {
            $this->config = (!$this->config) ? new Config($this->getModel()->getSettings()) : $this->config;
            $error = $this->config->getOption(
                'messages',
                $class,
                $key
            );
        }
        
        $this->error = array('error' => true,  'message' => $error);
    }

    public function isValid($value)
    {
        $valid = $this->validator->isValid($value);

        if (!$valid) {
            $this->setMessagesArray($this->getMessages());
        }

        return $valid;
    }

    public function formIsValid(array $fields, array $values)
    {
        $this->validators = array();
        $this->createValidators($fields, $values);
        $isValid = true;

        foreach ($this->validators as $index => $validator) {
            $value = $values[$index];
            $isValid = $validator->isValid($value);

            if (!$isValid) {
                $this->setMessagesArray($validator->getMessages());
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
            foreach ($validators as $validator) {
                $this->create();

                $name = (sizeof($validators) === 1) ? (sizeof($fields[$index]) === 1) ? $validator[0] : $validator : $validator[0];
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
                
                $this->validators[] = $this->validator;
                $this->dispose();
            }
        }
    }

    public function dispose()
    {
        $this->validator = null;
    }
}
