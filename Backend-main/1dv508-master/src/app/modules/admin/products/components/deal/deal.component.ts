import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../../../shared/services/upload.service';
import {ProductService} from "../../../../../shared/services/products/product.service";
import {ProductsService} from "../../../../../shared/services/products/products.service";


@Component({
    selector: 'app-admin-products-deal',
    templateUrl: './deal.component.html',
})
export class DealComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productsService: ProductsService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<DealComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            discount: [10, [Validators.required, Validators.min(1), Validators.max(99)]],
        });
    }

    ngOnInit() {

    }

    save() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.productsService.setDealOfDay(this.data.id, this.form.controls.discount.value)
            .then((next) => {
                this.dialog.close(this.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
