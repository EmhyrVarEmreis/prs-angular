import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector:    'app-specialty-badge',
    templateUrl: './specialty-badge.component.html',
    styleUrls:   ['./specialty-badge.component.scss']
})
export class SpecialtyBadgeComponent implements OnInit {

    @Input()
    public specialty: string;

    @Input()
    public selectable: boolean;

    @Input()
    public selected: boolean;

    @Output()
    public selectedChange: EventEmitter<boolean>;

    constructor() {
        this.selectedChange = new EventEmitter<boolean>();
    }

    public ngOnInit() {
        if (!this.selectable) {
            this.selected = false;
        }
    }

    public select() {
        if (!this.selectable) {
            return;
        }
        this.selected = !this.selected;
        this.selectedChange.emit(this.selected);
    }

}
