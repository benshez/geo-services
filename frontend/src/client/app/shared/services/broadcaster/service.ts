import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { IBroadcastEvent }  from '../../models/index';


export class Broadcaster {
    private _eventBus: Subject<IBroadcastEvent>;

    constructor() {
        this._eventBus = new Subject<IBroadcastEvent>();
    }

    broadcast(key: any, data?: any) {
        this._eventBus.next({ key, data });
    }

    on<T>(key: any): Observable<T> {
        return this._eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => <T>event.data);
    }
}
