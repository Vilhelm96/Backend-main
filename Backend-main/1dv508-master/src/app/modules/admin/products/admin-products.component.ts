import {Component, OnInit} from '@angular/core';
import {AddComponent} from './components/add/add.component';
import {MatDialog} from '@angular/material';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {ProductsService} from '../../../shared/services/products/products.service';
import {Product} from '../../../shared/models/products/product';
import {DeleteComponent} from './components/delete/delete.component';
import {DealComponent} from './components/deal/deal.component';
import {UnDealComponent} from './components/undeal/un-deal.component';


@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent extends ItemsComponent<Product> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Products', params: '', url: '/admin/products', home: false}
    ];
    displayedColumns = ['image', 'name', 'created_at', 'edit'];
    dealOfDay = null;

    constructor(
        private productsService: ProductsService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.getTotal();
        this.get();
        this.getDeal();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }


    // ----------------------
    openProductDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.delete(result);
            }
        });
    }

    openProductDealComponent(element) {
        const ref = this.dialog.open(DealComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.dealOfDay = result.id;
            }
        });
    }

    openProductUnDealComponent(element) {
        const ref = this.dialog.open(UnDealComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.dealOfDay = null;
            }
        });
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get()
            .subscribe(
                (data) => {
                    this.set(data);
                    subscription.unsubscribe();
                },
                () => {
                    subscription.unsubscribe();
                }
            )
        ;
    }

    getTotal() {
        this.productsService.getTotal().subscribe(
            (data) => {
                this.setTotal(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getDeal() {
        this.productsService.getDealOfDay().subscribe(
            (next) => {
                this.dealOfDay = next.productId;
            },
            (error) => {
                console.log(error);
            }
        );
    }
}

