import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Broadcaster } from '../../broadcaster/broadcaster';

@Injectable()
export class MessageEvent {
    constructor(private broadcaster: Broadcaster) { }

    fire(...args: any[]): void {
        this.broadcaster.broadcast(MessageEvent, args);
    }

    on(): Observable<any[]> {
        return this.broadcaster.on<any[]>(MessageEvent);
    }
}
