import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VetsListComponent} from './vets-list/vets-list.component';
import {VetsDetailsComponent} from './vets-details/vets-details.component';
import {VetsRoutingModule} from "./vets-routing.module";
import {MicroModule} from "../../common/micro/micro.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        VetsListComponent,
        VetsDetailsComponent,
    ],
    imports:      [
        CommonModule,
        VetsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MicroModule,
    ]
})
export class VetsModule {
}
