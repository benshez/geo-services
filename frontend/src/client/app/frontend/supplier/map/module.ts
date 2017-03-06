import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SupplierMapRoutes } from './routes';
import { SupplierMapComponent } from './component';

@NgModule({
    declarations: [SupplierMapComponent],
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(SupplierMapRoutes), AgmCoreModule.forRoot({
        region: 'au',
        apiKey: 'AIzaSyCJza05WEEuoK8XmTrg524pnnDokrtT5fc',
        libraries: ['places']
    })],
    bootstrap: [SupplierMapComponent]
})

export class SupplierMapModule { }