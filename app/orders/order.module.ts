import { NgModule } from '@angular/core';
import { OrderComponent } from "./order.component";
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        OrderComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'orders',component:OrderComponent}
        ]) 
    ]
})

export class orderModule{

}