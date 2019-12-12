import { Injectable } from '@angular/core';
import { UserSevice } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{


    constructor(private userService: UserSevice){ }

    canActivate(
        router: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
            console.log('Ativou guarda de rota')
            return true;
        }
}