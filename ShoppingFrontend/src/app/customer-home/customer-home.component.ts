import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent 
{
  content : string = "Step into a world of endless possibilities where your every desire meets its perfect match. Online Shopping App brings you closer to what you love, from fashion to gadgets, home essentials to luxury indulgences.";

  constructor(private router : Router) {}

  cart() : void
  {
    this.router.navigate(['/cart']);
  }

  onLogout()
  {
    this.router.navigate(['/login']);
  }

  showMore: boolean = false;

  toggleReadMore() 
  {
    this.showMore = !this.showMore;
  }

}
