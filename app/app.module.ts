import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { HomeComponent } from "./home/home.component";
import { Notfound } from "./shared/notFound.component";
import { ProductModule } from "./products/product.module";
import { orderModule } from "./orders/order.module";

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    orderModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:Notfound},
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Notfound
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
