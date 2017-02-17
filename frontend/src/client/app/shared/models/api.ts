import { RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

export class IApiServiceParametersOptions {
    url: string = '';
    parameters: any = {};
    cacheKey: string = '';
    concatApi: boolean = false;
}

export class IApiServiceOptions {
    method: RequestMethod;
    headers: any = {};
    parameters: IApiServiceParametersOptions;
    data: any = {};
    pendingCommands$: Observable<number>;
    pendingCommandsSubject: Subject<number>;
    pendingCommandCount: number = 0;
}