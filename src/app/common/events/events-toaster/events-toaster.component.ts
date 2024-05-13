import {Component, OnInit} from '@angular/core';

@Component({
    selector:    'app-events-toaster',
    templateUrl: './events-toaster.component.html',
    styleUrls:   ['./events-toaster.component.scss']
})
export class EventsToasterComponent implements OnInit {

    public events: string[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
