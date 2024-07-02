import {Component, OnInit} from '@angular/core';
import {Vet, VetApiService} from "../../../api-module";

@Component({
    selector:    'app-vets-list',
    templateUrl: './vets-list.component.html',
    styleUrls:   ['./vets-list.component.scss']
})
export class VetsListComponent implements OnInit {

    public vets: Vet[];
    public loading: boolean;

    constructor(
        private vetApiService: VetApiService,
    ) {
    }

    public ngOnInit() {
        this.loading = true;
        this.vetApiService.listVets().subscribe(_ => {
            this.vets = _;
            this.loading = false;
        });
    }

}
