import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './component';

@NgModule({
    imports: [BrowserModule, AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc'
    })],
    declarations: [MapComponent],
    bootstrap: [MapComponent]
})

export class MapModule {
    static forRoot(): ModuleWithProviders {
        debugger
        return {
            ngModule: MapModule,
            providers: [MapComponent]
        };
    }
}