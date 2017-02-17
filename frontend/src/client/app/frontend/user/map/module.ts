import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';

import { MapRoutes } from './routes';
import { MapComponent } from './component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(MapRoutes), AgmCoreModule.forRoot({
        region: 'au',
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc',
        libraries: ['places']
    })],
    declarations: [MapComponent],
    bootstrap: [MapComponent]
})

export class MapModule { }