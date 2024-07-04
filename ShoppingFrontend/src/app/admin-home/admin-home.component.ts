import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent 
{

  content : string = "Step into a world of endless possibilities where your every desire meets its perfect match. Online Shopping App brings you closer to what you love, from fashion to gadgets, home essentials to luxury indulgences.";

  constructor(private router : Router) {}

  product() : void
  {
    this.router.navigate(['/product']);
  }

  customer() : void
  {
    this.router.navigate(['/customer']);
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
