import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from "./product.service";

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product.component.html',
    styleUrls:['app/products/product-list.component.css']
    //styles:['thead{color:yellowgreen}']
})

export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    showImage:boolean=false;
    imageWidth:number=50;
    listFilter:string;
    products:IProduct[]
    
    constructor(private _productService:ProductService){

    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log("<<<<<<<<<<<<<<<<<<This is Init>>>>>>>>>>>>>>>>>>>>");
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message:string):void{
        this.pageTitle = "Product List  =>" + message;
    }
    
}












