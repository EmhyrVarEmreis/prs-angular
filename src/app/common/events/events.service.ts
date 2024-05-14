import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class EventsService {

    private _eventsEmitter: Subject<string> = new Subject();

    get eventsEmitter(): Observable<string> {
        return this._eventsEmitter;
    }

    public emit(event: string): void {
        console.log(`Fired event: ${event}`);
        this._eventsEmitter.next(event);
    }

}
