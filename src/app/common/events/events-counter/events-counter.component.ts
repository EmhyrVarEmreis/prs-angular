import {Component, OnInit} from '@angular/core';

@Component({
    selector:    'app-events-counter',
    templateUrl: './events-counter.component.html',
    styleUrls:   ['./events-counter.component.scss']
})
export class EventsCounterComponent implements OnInit {

    public count: number = 0;

    constructor() {
    }

    public ngOnInit() {
    }

}
