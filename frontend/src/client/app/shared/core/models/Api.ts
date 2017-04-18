import { RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

export class ApiServiceParametersOptions {
    url: string = '';
    parameters: any = {};
    cacheKey: string = '';
    concatApi: boolean = false;
    allowRequestOption: boolean = true;
}

export class ApiServiceOptions {
    method: RequestMethod;
    headers: any = {};
    parameters: ApiServiceParametersOptions;
    data: any = {};
    pendingCommands$: Observable<number>;
    pendingCommandsSubject: Subject<number>;
    pendingCommandCount: number = 0;
}
