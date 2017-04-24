import {
    Directive,
    NgZone,
    ElementRef
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    Config,
    IListener,
    IMapQuery,
    ApiService,
    ApiServiceParametersOptions
} from '../index';

@Directive({
    selector: '[mapper]'
})
export class Mapper {
    public model: IMapQuery;
    private errorMessage: string;
    private apiOptions: ApiServiceParametersOptions;

    constructor(
        private apiService: ApiService,
        private ngZone: NgZone) { }

    onListen(listener: IListener) {
        return this.ngZone.runOutsideAngular(() => {
            Observable.fromEvent<KeyboardEvent>(listener.element, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged()
                .subscribe(keyboardEvent => {
                    this.onSuggest(listener.value);
                });
        });
    }

    onSuggest(query: string) {

        this.apiOptions = new ApiServiceParametersOptions();
        this.apiOptions.cacheKey = '';
        this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + query + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
        this.apiOptions.parameters = '';
        this.apiOptions.concatApi = false;

        return this.apiService.get(this.apiOptions)
            .subscribe(
            (json: any) => { this.model = json; debugger },
            (error: any) => this.errorMessage = <any>error,
            () => { });
    }
}