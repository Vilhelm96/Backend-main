import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../../../shared/services/products/products.service';
import {Product} from '../../../../../shared/models/products/product';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-deal',
    templateUrl: './deal.component.html',
    styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {
    product: Product = null;

    constructor(
        private productsService: ProductsService,
        private router: Router,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }

    afterImageLoaded(event) {

    }

    navigate() {
        this.router.navigate(['/product/' + this.product.id]);
    }

    // ----------------------
    get() {
        this.productsService.getDealOfDayProduct()
            .then((next) => {
                this.product = next;

            })
            .catch((error) => {
                console.log(error);
            });
    }

}


