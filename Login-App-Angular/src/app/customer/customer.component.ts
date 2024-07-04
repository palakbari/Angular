import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerRestApiService } from './customer.service';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent 
{
  //object
  customerObj: Customer = new Customer();

  //display customer in table using *ngFor
  customers: Array<Customer> = new Array<Customer>();

  //for display the welcome+ username
  loginUserFirstName : string ="Dummy";

  constructor(private customerRestApiService : CustomerRestApiService, private router : Router)
  {
    this.loadCustomers();

    //welcome+username
    this.loginUserFirstName=JSON.parse(localStorage.getItem("UserName")||"")

    // let customer1:Customer = new Customer();
    //   customer1.id="45";
    //   customer1.CName="Rohit";
    //   customer1.Email="rohit45@gmail.com";
    //   customer1.Amount=45000;

    //   let customer2:Customer = new Customer();
    //   customer2.id="18";
    //   customer2.CName="Virat";
    //   customer2.Email="virat18@gmail.com";
    //   customer2.Amount=18000;

    //   this.customers.push(customer1);
    //   this.customers.push(customer2);
      
  }

  //get
  loadCustomers()
  {
    return this.customerRestApiService.getCustomers().subscribe
    (
      (data : Customer[])=>
        {
          console.log(data)
          // this.customers = data;
           this.customers=new Array<Customer>();
           for(let item of data)
             {
               let cust: Customer=new Customer();
               cust.id = item.id;
               cust.CName = item.CName;
               cust.Amount = item.Amount;
               cust.Email = item.Email;
               this.customers.push(cust);
             }
        }
    );
  }

  //post
  postToServer()
  {
    var customerto : any = {};
    customerto.id = this.customerObj.id;
    customerto.CName = this.customerObj.CName;
    customerto.Amount = this.customerObj.Amount;
    customerto.Email = this.customerObj.Email;

    //call service method
    this.customerRestApiService.createCustomers(customerto).subscribe
    (
      (data : {})=>
        {
          window.alert("Data Inserted Successfully!!");
        }
    )
    this.loadCustomers();
  }

  //delete
  deleteFromServer()
  {
    let id = this.customerObj.id;
    console.log(id);
    this.customerRestApiService.deleteCustomer(id).subscribe
    (
      (data : {})=>
        {
          window.alert("Data Deleted Successfully!!");
        }
    );
    this.loadCustomers();
  }

  //update 
  updateFromServer()
  {
    var customerto : any = {};
    customerto.id = this.customerObj.id;
    customerto.CName = this.customerObj.CName;
    customerto.Amount = this.customerObj.Amount;
    customerto.Email = this.customerObj.Email;

    //call service method
    this.customerRestApiService.updateCustomer(customerto.id, customerto).subscribe
    (
      (data : {})=>
        {
          window.alert("Data Updated Successfully!!");
        }
    );
    this.loadCustomers();
  }

  //event binding button
  demo()
  {
    window.alert("Button Clicked");
  }

  clear()
  {
    this.customerObj = new Customer();
  }

  //add
  add()
  {
    this.customers.push(this.customerObj);
    this.clear;
  }

  //select
  select(selectCustomer : Customer)
  {
    this.customerObj = Object.assign({}, selectCustomer);
  }

  //delete
  delete()
  {
    const findindex = this.customers.findIndex(c=>c.id==this.customerObj.id);
    if(findindex>=-1)
      {
        this.customers.splice(findindex,1);
        this.clear();
      }
    else
      {
        window.alert("record not found"+findindex)
      }
      this.customerObj = new Customer();
  }

  //update
  update()
  {
    const index = this.customers.findIndex(customer => customer.id === this.customerObj.id);
    if (index !== -1) 
      {
        this.customers.splice(index, 1, this.customerObj); 
        this.clear(); 
      }
  }

  hasError(typeofvalidator:string, controlname:string):boolean
  {
    return this.customerObj.formCustomerGroup.controls[controlname].hasError(typeofvalidator)
  }

  //logout
  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("Username");
    this.router.navigate(['login']);
  }
}
