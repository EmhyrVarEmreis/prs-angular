import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vet, VetApiService} from "../../../api-module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector:    'app-vets-details',
    templateUrl: './vets-details.component.html',
    styleUrls:   ['./vets-details.component.scss']
})
export class VetsDetailsComponent implements OnInit {

    public vet: Vet;
    public form: FormGroup;
    public loading: boolean;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private vetApiService: VetApiService,
    ) {
    }

    public ngOnInit() {
        this.loading = true;
        this.route.paramMap.subscribe(paramMap => {
            const vetId = paramMap.get('id');
            if (vetId == 'new') {
                this.vet = {specialties: []} as any;
                this.initForm();
                this.loading = false;
                return;
            }
            this.vetApiService.getVet(parseInt(vetId)).subscribe(_ => {
                this.vet = _;
                this.initForm();
                this.loading = false;
            });
        });
    }

    private initForm(): void {
        this.form = this.formBuilder.group({
            firstName:   [this.vet.firstName, [Validators.minLength(3), Validators.maxLength(32)]],
            lastName:    [this.vet.lastName, [Validators.minLength(3), Validators.maxLength(32)]],
            specialties: [this.vet.specialties, []],
        });
        this.form.valueChanges.subscribe(console.log);
    }

}
