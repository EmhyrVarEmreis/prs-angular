import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsCounterComponent} from './events-counter/events-counter.component';
import {EventsToasterComponent} from './events-toaster/events-toaster.component';
import {EventsService} from "./events.service";
import {EventsCreatorComponent} from './events-creator/events-creator.component';


@NgModule({
    declarations: [EventsCounterComponent, EventsToasterComponent, EventsCreatorComponent],
    exports:      [EventsCounterComponent, EventsToasterComponent, EventsCreatorComponent],
    providers:    [EventsService],
    imports:      [
        CommonModule
    ]
})
export class EventsModule {
}
