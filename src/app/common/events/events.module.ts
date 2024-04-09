import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsCounterComponent} from './events-counter/events-counter.component';
import {EventsToasterComponent} from './events-toaster/events-toaster.component';
import {EventsService} from "./events.service";


@NgModule({
    declarations: [EventsCounterComponent, EventsToasterComponent],
    exports:      [EventsCounterComponent, EventsToasterComponent],
    providers:    [EventsService],
    imports:      [
        CommonModule
    ]
})
export class EventsModule {
}
