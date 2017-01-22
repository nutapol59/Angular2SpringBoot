"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customers_service_1 = require('../customers/customers.service');
var CustomersComponent = (function () {
    function CustomersComponent(customerService) {
        this.customerService = customerService;
    }
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (value) { return _this.customers = value; }, function (error) { return _this.errorMessage = error; });
    };
    CustomersComponent.prototype.addHero = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.customerService.addHero(name)
            .subscribe(function (value) { return _this.customers.push(value); }, function (error) { return _this.errorMessage = error; });
    };
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.css']
        }), 
        __metadata('design:paramtypes', [customers_service_1.CustomersService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map