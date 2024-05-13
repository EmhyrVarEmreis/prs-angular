import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsUiComponent} from "./events-ui/events-ui.component";

const routes: Routes = [{
    path:      'events',
    component: EventsUiComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventsUiRoutingModule {
}
