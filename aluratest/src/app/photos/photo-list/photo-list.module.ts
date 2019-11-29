import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';

import { PhotosListComponent } from '../photos-list/photos-list.component';
import { PhotosComponent } from '../photos-list/photos/photos.component';
import { FilterByDescription } from '../photos-list/photos/filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule{

}