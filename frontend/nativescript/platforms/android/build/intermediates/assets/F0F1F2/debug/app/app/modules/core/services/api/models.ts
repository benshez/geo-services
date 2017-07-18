import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ApiServiceParametersOptions {
    url: string = '';
    parameters: any = {};
    cacheKey: string = '';
    concatApi: boolean = false;
    allowRequestOption: boolean = true;
}

@Injectable()
export class ApiServiceOptions {
    method: RequestMethod;
    headers: any = {};
    parameters: ApiServiceParametersOptions;
    data: any = {};
    pendingCommands$: Observable<number>;
    pendingCommandsSubject: Subject<number>;
    pendingCommandCount: number = 0;
}
