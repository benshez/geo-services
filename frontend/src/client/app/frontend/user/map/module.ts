import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';

import { MapRoutes } from './routes';
import { MapComponent } from './component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(MapRoutes), AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc'
    })],
    declarations: [MapComponent]
})

export class MapModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MapModule
        };
    }
}