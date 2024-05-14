import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";

@Component({
    selector:    'app-events-counter',
    templateUrl: './events-counter.component.html',
    styleUrls:   ['./events-counter.component.scss']
})
export class EventsCounterComponent implements OnInit {

    public count: number = 0;

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
        this.eventsService.eventsEmitter.subscribe(() => this.count++);
    }

}
