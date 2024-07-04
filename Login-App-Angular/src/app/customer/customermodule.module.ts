import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomerRoutingModule } from "./customer-routing.module";


@NgModule
(
    {
        declarations:
        [
            CustomerComponent
        ],

        providers:[],

        bootstrap:[CustomerComponent],

        imports:
        [
            CommonModule, 
            CustomerRoutingModule, 
            FormsModule, 
            ReactiveFormsModule
        ]
    }
)

export class CustomerModule{

}