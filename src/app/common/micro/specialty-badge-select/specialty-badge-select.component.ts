import {Component, forwardRef, OnInit} from '@angular/core';
import {Specialty, SpecialtyApiService} from "../../../api-module";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector:    'app-specialty-badge-select',
    templateUrl: './specialty-badge-select.component.html',
    styleUrls:   ['./specialty-badge-select.component.scss'],
    providers:   [
        {
            provide:     NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SpecialtyBadgeSelectComponent),
            multi:       true,
        },
    ],
})
export class SpecialtyBadgeSelectComponent implements OnInit, ControlValueAccessor {

    public specialties: Specialty[];
    public selected: Specialty[];
    public disabled: boolean = false;
    public onChange: (_: any) => void = (_: any) => {
    };

    constructor(
        private specialtyApiService: SpecialtyApiService,
    ) {
        this.selected = [];
    }

    public ngOnInit() {
        this.specialtyApiService.listSpecialties().subscribe(_ => this.specialties = _);
    }

    public writeValue(obj: Specialty[]): void {
        this.selected = obj;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public isSelected(spec: Specialty): boolean {
        return this.selected.map(_ => _.name).includes(spec.name);
    }

    public select(spec: Specialty, should: boolean): void {
        const is = this.isSelected(spec);
        if (is && !should) {
            this.selected.splice(this.selected.indexOf(this.selected.find(_ => _.name === spec.name)), 1);
            this.publishState();
        } else if (!is && should) {
            this.selected.push(spec);
            this.publishState();
        }
    }

    private publishState(): void {
        this.onChange(this.selected);
    }

}
