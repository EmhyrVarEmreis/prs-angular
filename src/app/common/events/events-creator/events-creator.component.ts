import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";

@Component({
    selector:    'app-events-creator',
    templateUrl: './events-creator.component.html',
    styleUrls:   ['./events-creator.component.scss']
})
export class EventsCreatorComponent implements OnInit {

    constructor(
        private eventsService: EventsService,
    ) {
    }

    public ngOnInit(): void {
    }

}
