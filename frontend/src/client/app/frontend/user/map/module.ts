import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MapRoutes } from './routes';
import { MapComponent } from './component';
import { MarkerCluster } from './cluster';

@NgModule({
    declarations: [MapComponent, MarkerCluster],
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(MapRoutes), AgmCoreModule.forRoot({
        region: 'au',
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc',
        libraries: ['places']
    })],
    bootstrap: [MapComponent]
})

export class MapModule { }