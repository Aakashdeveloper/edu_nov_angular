import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    templateUrl:'app/products/productdetail.component.html'
})


export class ProductDetail implements OnInit{
    PageTitle:string="Product Details";

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit(): void{
        let id= +this._route.snapshot.params['id'];
        this.PageTitle += ` :${id}` 
    }

    onBack(): void{
        this._router.navigate(['/products'])
    }
}