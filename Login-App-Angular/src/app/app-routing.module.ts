import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfieldComponent } from './crossfield/crossfield.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'customer',loadChildren:()=>import('./customer/customermodule.module').then (p => p.CustomerModule), canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'crossfield',component:CrossfieldComponent},
  {path:'formarray',component:DynamicFormArrayComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
