import { Component, OnInit } from '@angular/core';
import { Config, LogService, ApiService, SeoService, MessageEvent, IApiServiceParametersOptions } from './shared/index';

import './operators';

@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'tmpl.html'
})

export class AppComponent implements OnInit {
    errorMessage: string;

    constructor(private _logger: LogService, private _apiService: ApiService,
        private message: MessageEvent, private seoService: SeoService, private apiParameters: IApiServiceParametersOptions) { }

    ngOnInit() { }

}
