import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  pro_id : any;
  pro_name : string;
  pro_cost : any;
  pro_quantity : any;
  pro_discount : any;

  Products = [];

  ngOnInit() : void 
  {
    this.fetchProducts();
  }

  constructor(private productService : ProductService, private router : Router) {}

  fetchProducts() 
  {
    this.productService.getProducts().subscribe
    (
      (data) => 
      {
        console.log(data);
        this.Products = data;
      }
    )
  }

  // updateProduct() {
  //   console.log(productto.id)
  //   this.productRestService.updateProduct(productto.id, productto).subscribe((data: {}) => {
  //     window.alert("Data Updated Successfully!!!")
  //   });
  //   this.getProducts();
  // }

  // deleteProduct() {
  //   let id = this.pro.pro_id;
  //   this.productRestService.deleteProduct(pro_id).subscribe((data: {}) => {
  //     window.alert("Data Deleted Successfully!!!")
  //   });
  //   this.getProducts();
  // }

  onSubmit()
  {
    const insertData = 
    {
      pro_id : this.pro_id,
      pro_name : this.pro_name,
      pro_cost : this.pro_cost,
      pro_quantity : this.pro_quantity,
      pro_discount : this.pro_discount
    }
    this.productService.addProduct(insertData).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.fetchProducts();
        window.alert("Data Inserted Successfully!!!")
      }
    )
  }

  onBack()
  {
    this.router.navigate(['/admin-home']);
  }


  // select(selectProducts : Product)
  // {
  //   this.pro = Object.assign({}, selectProducts)
  // }

}
