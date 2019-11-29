import { NgModule } from '@angular/core';


import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
 export class PhotosModule{}