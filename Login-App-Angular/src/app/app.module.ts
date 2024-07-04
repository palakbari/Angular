import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfieldComponent } from './crossfield/crossfield.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { ServicesComponent } from './services/services.component';

import { HttpClientModule } from '@angular/common/http'
import { BaseLogger, ConsoleLogger, DBLogger, FileLogger } from './services/logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ContactComponent,
    CrossfieldComponent,
    DynamicFormArrayComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: 
  [
    {
      provide : BaseLogger, useClass : ConsoleLogger
    },
    {
      provide : "1", useClass : FileLogger
    },
    {
      provide : "2", useClass : DBLogger
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
