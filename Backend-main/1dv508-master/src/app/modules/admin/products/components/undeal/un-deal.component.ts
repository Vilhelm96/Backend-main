import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {ProductService} from "../../../../../shared/services/products/product.service";
import {ProductsService} from "../../../../../shared/services/products/products.service";


@Component({
    selector: 'app-admin-products-un-deal',
    templateUrl: './un-deal.component.html',
})
export class UnDealComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private productsService: ProductsService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<UnDealComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    ngOnInit() {

    }

    save() {
        this.working = true;
        this.error = null;
        this.productsService.setDealOfDay('', '')
            .then((next) => {
                this.working = false;
                this.dialog.close(this.data);
            })
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
