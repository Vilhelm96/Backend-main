import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';
import {ContactRoutingModule} from './contact.routing.module';
import {ContactComponent} from './contact.component';
import {ComponentsModule} from '../../../components.module';
import {ProductsService} from '../../../shared/services/products/products.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {WindowRef} from '../../../shared/directives/WindowRef';


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        ContactRoutingModule,
        CommonModule,
        SharedModule,

    ],
    declarations: [
        ContactComponent,
    ],
    providers: [
        ProductsService,
        WindowRef,
    ],

    entryComponents: []
})
export class ContactModule {
}
