import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { CustomersComponent } from './customers/customers.component'

const routes: Routes = [
  //  { path: '', redirectTo: '/', pathMatch: 'full' }, //remember / == /dashboard begin openWeb
  { path: '',  component: CustomersComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//    //  :id is a placeholder to be filled with a specific hero id when navigating to the HeroDetailComponent.
//   { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}