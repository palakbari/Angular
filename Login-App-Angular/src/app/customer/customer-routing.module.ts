import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer.component";


const Customerroutes: Routes=
[
    {path:'',component:CustomerComponent},  
    {path:'customer',component:CustomerComponent}
];

@NgModule
(
    {
        imports: [RouterModule.forChild(Customerroutes)],
        exports : [RouterModule]
    }
)

export class CustomerRoutingModule {}