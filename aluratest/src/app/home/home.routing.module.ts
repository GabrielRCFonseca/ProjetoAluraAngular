import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.componente';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SigninComponent
            },
            {
                path: 'signup', 
                component: SignupComponent
            },
        ]
    },
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule{

}