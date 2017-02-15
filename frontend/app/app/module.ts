import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './component';

import { SharedModule } from '../shared/module';

@NgModule({
    imports: [BrowserModule, AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc'
    })],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
