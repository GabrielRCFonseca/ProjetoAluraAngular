import { Component } from '@angular/core';
import { UserSevice } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    user$: Observable<User>;
    user: User;

    constructor(private userService: UserSevice){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

}