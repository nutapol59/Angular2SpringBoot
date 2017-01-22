import { Component,OnInit } from '@angular/core'

import { HeaderComponent } from '../header/header.component'
import { CustomersService } from '../customers/customers.service'
import { Customer } from '../customers/customer'



@Component({
    moduleId:module.id,
    selector:'customers',
    templateUrl:'./customers.component.html',
    styleUrls: ['./customers.component.css']

})
export class CustomersComponent implements OnInit{
    customers : Customer[];
    errorMessage: string;

    constructor(private customerService : CustomersService){
        
    }

    getCustomers() {
            this.customerService.getCustomers()
                .subscribe(
                value => this.customers = value,
                error => this.errorMessage = <any>error
                )
                
        }
    
     addHero (name: string) {
    if (!name) { return; }
    this.customerService.addHero(name)
                     .subscribe(
                       value  => this.customers.push(value),
                       error =>  this.errorMessage = <any>error);
  }

    ngOnInit(){
        this.getCustomers();
    }
}