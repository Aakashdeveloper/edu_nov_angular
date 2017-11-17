import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { CarComponent } from "./car.component";
import { ProductListComponent } from "./products/product.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetail } from "./products/product0detail.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { Notfound } from "./shared/notFound.component";
import { ProductGaurdsService } from "./products/product-guard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',canActivate:[ProductGaurdsService], component:ProductDetail},
      {path:'orders',component:OrderComponent},
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:Notfound},
    ])
  ],
  declarations: [
    AppComponent,
    CarComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetail,
    OrderComponent,
    HomeComponent,
    Notfound
  ],
  bootstrap: [ AppComponent ],
  providers:[ProductService,ProductGaurdsService]
})

export class AppModule { }
