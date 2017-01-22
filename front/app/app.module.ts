import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component'
import { CustomersService } from './customers/customers.service'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  JsonpModule ],

  declarations: [ AppComponent,
                  HeaderComponent,
                  HomeComponent,
                  CustomersComponent ],
                   
  bootstrap:    [ AppComponent ],
  providers: [ CustomersService ]
})
export class AppModule { }
