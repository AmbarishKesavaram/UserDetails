import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user/user.component'
import {CountryComponent} from './country/country.component'

const routes: Routes = [
{path:'user',component:UserComponent},
{path:'country',component:CountryComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
