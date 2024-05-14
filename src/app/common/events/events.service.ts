import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class EventsService {

    private _eventsEmitter: Subject<string> = new Subject();
    private _clearEventEmitter: Subject<void> = new Subject();

    get eventsEmitter(): Observable<string> {
        return this._eventsEmitter;
    }

    get clearEvent(): Observable<void> {
        return this._clearEventEmitter;
    }

    public emit(event: string): void {
        console.log(`Fired event: ${event}`);
        this._eventsEmitter.next(event);
    }

    public clear(): void {
        console.log(`Clearing events`);
        this._clearEventEmitter.next();
    }



}
