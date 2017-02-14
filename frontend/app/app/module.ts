import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './component';

import { SharedModule } from '../shared/module';

@NgModule({
    imports: [BrowserModule, AgmCoreModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
