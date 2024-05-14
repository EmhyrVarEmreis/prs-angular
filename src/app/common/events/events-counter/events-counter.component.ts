import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {auditTime, tap} from "rxjs/operators";

@Component({
    selector:    'app-events-counter',
    templateUrl: './events-counter.component.html',
    styleUrls:   ['./events-counter.component.scss']
})
export class EventsCounterComponent implements OnInit {

    private static LS_KEY_COUNTER = 'counter';

    private count: number = 0;
    public countToDisplay: number = 0;

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
        this.count = JSON.parse(localStorage.getItem(EventsCounterComponent.LS_KEY_COUNTER));
        this.eventsService.eventsEmitter.pipe(
            tap(() => {
                this.count++;
                localStorage.setItem(EventsCounterComponent.LS_KEY_COUNTER, JSON.stringify(this.count));
            }),
            auditTime(3000),
        ).subscribe(() => {
            this.countToDisplay = this.count;
        });
        this.eventsService.clearEvent.subscribe(() => {
            this.count = 0;
        });
    }

}
