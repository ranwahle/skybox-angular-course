import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function movieNameValidator(): ValidatorFn {
  return (control: FormControl) => {
    const value = control.value as string;
    const validationError: ValidationErrors = {};
    validationError.notRequired = 'You should not have filled this';
    return (value ? validationError : null);
  };
}


export function myMaxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value.length > maxLength) {
      return {maxLength: `Should not exceed ${maxLength} characters`};
    }
    return null;
  };
}

export function myIpValidator(control: FormControl): ValidationErrors | null {
  const ip = control.value;
  const regExp = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')
  if (!regExp.test(ip)) {
    return {'ip': 'Please exter valid IP'}
  }
  return null;

}
