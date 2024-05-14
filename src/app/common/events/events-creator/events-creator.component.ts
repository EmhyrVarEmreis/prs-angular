import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {interval, Subscription} from 'rxjs';
import {tap} from "rxjs/operators";

@Component({
    selector:    'app-events-creator',
    templateUrl: './events-creator.component.html',
    styleUrls:   ['./events-creator.component.scss']
})
export class EventsCreatorComponent implements OnInit {

    public static EVENT_DEFAULT_TEXT: string = 'This is default event';

    private interval = interval(1200);
    private intervalSubscription: Subscription | null = null;

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
    }

    public get automaticState(): boolean {
        return this.intervalSubscription !== null;
    }

    public createEventDefault(): void {
        this.eventsService.emit(EventsCreatorComponent.EVENT_DEFAULT_TEXT);
    }

    public createEventCustom(): void {
        const text = prompt('Enter custom text', 'Custom text');
        if (text !== null) {
            this.eventsService.emit(text);
        }
    }

    public toggleAutomaticEventCreation(): void {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
            this.intervalSubscription = null;
        } else {
            this.intervalSubscription = this.interval.pipe(
                tap(() => this.createEventDefault()),
            ).subscribe()
        }
    }

    public clearAll(): void {
        this.eventsService.clear();
    }

}
