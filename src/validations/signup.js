import { empty, email } from 'is_js';
import validator from 'lodash';

export default function validate(data = {}) {
    let errors = {};

    if (!data.firstName && validator.isEmpty(data.firstName)) {
        errors['firstName'] = 'First Name is required!'
    }
    
    if (!data.lastName && validator.isEmpty(data.lastName)) {
        errors['lastName'] = 'Last Name is required!'
    }

    if (!data.email && validator.isEmpty(data.email)) {
        errors['email'] = 'Email is required!'
    }

    if (data.email && !email(data.email)) {
        errors['email'] = 'Invalid email!'
    }
    
    if (!data.phone && validator.isEmpty(data.phone)) {
        errors['phone'] = 'Phone no. is required!'
    }

    if (data.phone && data.phone.length < 10 ) {
        errors['phone'] = 'Invalid Phone no.!'
    }

    if (!data.password && validator.isEmpty(data.password)) {
        errors['password'] = 'Password is required!'
    }

    if ((data.password && !data.confirmPassword) || data.password !== data.confirmPassword) {
        errors['confirmPassword'] = 'Password didn\'t mathched';
    }

    return {
        isValid: empty(errors),
        errors
    }
}