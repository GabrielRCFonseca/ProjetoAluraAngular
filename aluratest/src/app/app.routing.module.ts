import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photos-list/photo.list.resolver';
import { SigninComponent } from './home/signin/signin.componente';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
   {
        path: '',
        component: SigninComponent,
        canActivate: [AuthGuard]
   },
   {
        path: 'user/:userName', 
        component: PhotosListComponent,
        resolve: {
        photos: PhotoListResolver
        }
    },
    {
        path: 'p/add', 
        component: PhotosFormComponent
    },
    {
        path: '**', 
        component: NotFoundComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}