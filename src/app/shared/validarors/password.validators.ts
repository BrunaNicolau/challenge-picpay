import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, switchMap, catchError } from 'rxjs/operators';

export function passwordAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  if (!control.value) {
    return of(null);
  }

  return of(control.value).pipe(
    debounceTime(300),
    map((password) => {
      const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(password);
      return isValid ? null : { passwordInvalid: true };
    }),
    catchError(() => of(null)) 
  );
}
