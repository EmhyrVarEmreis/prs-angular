import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsUiComponent} from './events-ui/events-ui.component';
import {EventsModule} from "../../common/events/events.module";
import {EventsUiRoutingModule} from "./events-ui-routing.module";


@NgModule({
    declarations: [
        EventsUiComponent,
    ],
    imports:      [
        CommonModule,
        EventsUiRoutingModule,
        EventsModule,
    ]
})
export class EventsUiModule {
}
