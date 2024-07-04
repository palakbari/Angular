import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
  c_id : any;
  c_name : string;
  balance : any;  

  Customers = [];
  
  ngOnInit(): void 
  {
    this.fetchCustomers();
  }

  constructor(private customerService : CustomerService, private router : Router) {}

  fetchCustomers()
  {
    this.customerService.getCustomers().subscribe
    (
      (data) =>
        {
          console.log(data);
          this.Customers = data;
        }
    )
  }

  onSubmit()
  {
    const insertData = 
    {
      c_id: this.c_id,
      c_name : this.c_name,
      balance : this.balance
    }
    this.customerService.addCustomer(insertData).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.fetchCustomers();
      }
    )
  }

  onBack()
  {
    this.router.navigate(['/customer-home']);
  }


}
