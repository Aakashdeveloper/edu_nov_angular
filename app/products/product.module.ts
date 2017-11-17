import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductListComponent } from "./product.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { ProductDetail } from "./product0detail.component";
import { ProductGaurdsService } from "./product-guard.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetail
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',canActivate:[ProductGaurdsService], component:ProductDetail},
        ])
    ],
    providers:[ProductService,ProductGaurdsService]
})

export class ProductModule{

}