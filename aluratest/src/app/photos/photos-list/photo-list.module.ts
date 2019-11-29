import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';

import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/cards/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotoListModule{

}