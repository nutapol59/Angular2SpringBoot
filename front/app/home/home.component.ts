import { Component,OnInit } from '@angular/core'
import { HeaderComponent } from '../header/header.component'

import { CustomersComponent } from '../customers/customers.component'


@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit{
    
    constructor(){

    }
    ngOnInit(){
        // this.customer.getCustomers();
    }
}