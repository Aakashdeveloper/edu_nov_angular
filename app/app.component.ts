import {Component} from '@angular/core'

@Component({
    selector:'pm-app',
    template:`<div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{PageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product</a></li>
                    <li><a [routerLink]="['/orders']">Order</a></li>
                </ul>
                
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <hr>
        <h3>This is footer</h3>
    </div>`
})

export class AppComponent{
    PageTitle:string="Edureka"
}