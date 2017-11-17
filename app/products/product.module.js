"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_component_1 = require("./product.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var product_service_1 = require("./product.service");
var product0detail_component_1 = require("./product0detail.component");
var product_guard_component_1 = require("./product-guard.component");
var shared_module_1 = require("../shared/shared.module");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_component_1.ProductListComponent,
                product_filter_pipe_1.ProductFilterPipe,
                product0detail_component_1.ProductDetail
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_component_1.ProductListComponent },
                    { path: 'product/:id', canActivate: [product_guard_component_1.ProductGaurdsService], component: product0detail_component_1.ProductDetail },
                ])
            ],
            providers: [product_service_1.ProductService, product_guard_component_1.ProductGaurdsService]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map