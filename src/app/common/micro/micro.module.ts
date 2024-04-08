import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialtyBadgeComponent} from './specialty-badge/specialty-badge.component';
import {SpecialtyBadgeSelectComponent} from './specialty-badge-select/specialty-badge-select.component';

@NgModule({
    declarations: [
        SpecialtyBadgeComponent,
        SpecialtyBadgeSelectComponent,
    ],
    exports:      [
        SpecialtyBadgeComponent,
        SpecialtyBadgeSelectComponent,
    ],
    imports:      [
        CommonModule
    ]
})
export class MicroModule {
}
