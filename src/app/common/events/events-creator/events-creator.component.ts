import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";

@Component({
    selector:    'app-events-creator',
    templateUrl: './events-creator.component.html',
    styleUrls:   ['./events-creator.component.scss']
})
export class EventsCreatorComponent implements OnInit {

    public static EVENT_DEFAULT_TEXT: string = 'This is default event';

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
    }

    public createEventDefault(): void {
        this.eventsService.emit(EventsCreatorComponent.EVENT_DEFAULT_TEXT);
    }

}
