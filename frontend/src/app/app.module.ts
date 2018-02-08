import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// app
import { Config } from './_common/utils';
import { AppComponent } from './app.component';
import { SHARED_MODULES, SHARED_PROVIDERS } from './app.common';

// Kendo UI
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

// Components
import { COMPONENT_DECLARATIONS } from './_components';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
    declarations: [
        AppComponent,
        COMPONENT_DECLARATIONS
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ...SHARED_MODULES
    ],
    providers: [
        ...SHARED_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
