import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, AgmCoreModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
