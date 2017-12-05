import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

export default (data) => {
    let errors = {};

    if (Validator.isEmpty(data.firstName)){
        errors.firstName = 'First Name field is required';
    }

    if (Validator.isEmpty(data.lastName)){
        errors.lastName = 'Last Name field is required';
    }

    if (!isObject(data.department)){
        errors.department = 'Please select departments from list';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
