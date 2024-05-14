import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";

@Component({
    selector:    'app-events-counter',
    templateUrl: './events-counter.component.html',
    styleUrls:   ['./events-counter.component.scss']
})
export class EventsCounterComponent implements OnInit {

    private static LS_KEY_COUNTER = 'counter';

    public count: number = 0;

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
        this.count = JSON.parse(localStorage.getItem(EventsCounterComponent.LS_KEY_COUNTER));
        this.eventsService.eventsEmitter.subscribe(() => {
            this.count++;
            localStorage.setItem(EventsCounterComponent.LS_KEY_COUNTER, JSON.stringify(this.count));
        });
        this.eventsService.clearEvent.subscribe(() => {
            this.count = 0;
        });
    }

}
