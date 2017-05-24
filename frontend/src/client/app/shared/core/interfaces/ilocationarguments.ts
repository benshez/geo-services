import { ApiServiceParametersOptions } from '../models/Api';
import { Observable } from 'rxjs/Observable';

export interface ILocationArguments {
    keyword: Observable<string>;
    key: any;
    value: any;
    delay: number;
    minQueryLength: number;
    cacheKey: string;
    apiOptions: ApiServiceParametersOptions;
    DeepObjectName: string;
}