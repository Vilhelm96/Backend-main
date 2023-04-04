import {NgModule} from '@angular/core';


import {AdminProductsRoutingModule} from './admin-products.routing.module';

import {AdminProductsComponent} from './admin-products.component';
import {MaterialModule} from "../../../material.module";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {ProductsService} from "../../../shared/services/products/products.service";
import {UploadService} from "../../../shared/services/upload.service";
import {ProductService} from "../../../shared/services/products/product.service";
import {DealComponent} from "./components/deal/deal.component";
import {UnDealComponent} from "./components/undeal/un-deal.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminProductsRoutingModule,
    ],
    declarations: [
        AdminProductsComponent,
        AddComponent,
        DeleteComponent,
        DealComponent,
        UnDealComponent,
    ],
    providers: [
        ProductsService,
        ProductService,
        UploadService,
    ],
    entryComponents: [
        AddComponent,
        DeleteComponent,
        DealComponent,
        UnDealComponent,
    ]
})
export class AdminProductsModule {
}
