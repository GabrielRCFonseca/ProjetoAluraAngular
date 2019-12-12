import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

import { signupService } from './signup.service';


@Injectable({ providedIn: 'root'})


export class userNotTakenValidatorService{

    constructor(private signupService: signupService) {}

    checkUserNameTaken(){

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signupService.checkUserNameTaken(userName);
                }))
        }
    }

}