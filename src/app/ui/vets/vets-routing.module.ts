import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VetsListComponent} from "./vets-list/vets-list.component";
import {VetsDetailsComponent} from "./vets-details/vets-details.component";

const routes: Routes = [{
    path:     'vets',
    children: [{
        path:      'list',
        component: VetsListComponent,
    }, {
        path:      ':id',
        component: VetsDetailsComponent,
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VetsRoutingModule {
}
