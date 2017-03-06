import { Component, OnInit } from '@angular/core';
import { Config, LogService, ApiService, SeoService, MessageEvent, ApiServiceParametersOptions } from './shared/index';

import { MdlLayoutComponent, MdlIconComponent } from 'angular2-mdl';

import './operators';

@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'tmpl.html',
    providers: [MdlLayoutComponent, MdlIconComponent]
})

export class AppComponent implements OnInit {
    errorMessage: string;

    constructor(private _logger: LogService, private _apiService: ApiService,
        private message: MessageEvent, private seoService: SeoService,
        private apiParameters: ApiServiceParametersOptions, private mainLayout: MdlLayoutComponent) {
        mainLayout.closeDrawerOnSmallScreens();
    }

    ngOnInit() { }

    public componentSelected(mainLayout: MdlLayoutComponent) {
        debugger
    }
}
