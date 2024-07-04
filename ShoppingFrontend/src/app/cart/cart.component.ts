import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 
{
  Carts = [];
  Products = [];
  bill: number = 0;
  paymentResult: string = '';
  balance: number = 0;
  amountToAdd: number = 0;
  username: string;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getFormCart();
  }

  getFormCart(): void {
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        this.Products = data;
        this.loadCart();
        this.calculateBill();
        this.loadBalance();
      },
      error: (error) => {
        console.log('Error fetching products:', error);
      }
    });
  }

  addToCart(productId: number, quantity: number): void {
    const product = this.Products.find(prod => prod.pro_id === productId);
    if (product && quantity > 0 && quantity <= product.pro_quantity) {
      const existingItem = this.Carts.find(item => item.pro_id === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const item = {
          pro_id: product.pro_id,
          pro_name: product.pro_name,
          pro_cost: product.pro_cost,
          quantity: quantity
        };
        this.Carts.push(item);
      }
      this.cdr.detectChanges();
    } else {
      console.log('Invalid Product or Quantity');
    }
  }

  parseQuantity(quantityStr: string): number {
    return parseInt(quantityStr, 10);
  }

  removeFromCart(index: number): void {
    this.Carts.splice(index, 1);
  }

  calculateTotal(): number {
    return this.Carts.reduce((total, item) => total + (item.pro_cost * item.quantity), 0);
  }

  loadCart(): void {
    this.cartService.getCart().subscribe({
      next: (response) => {
        this.Carts = response;
      },
      error: (error) => {
        console.log('Error loading cart:', error);
      }
    });
  }

  calculateBill(): void {
    this.cartService.displayBill(this.username).subscribe({
      next: (response) => {
        this.bill = response.bill;
      },
      error: (error) => {
        console.log('Error calculating bill:', error);
      }
    });
  }

  payBill(): void {
    this.cartService.payBill(this.username).subscribe({
      next: (response) => {
        this.paymentResult = response.result;
        this.bill = response.paid;
        this.loadCart(); // Refresh the cart after payment
        this.loadBalance(); // Refresh the balance after payment
      },
      error: (error) => {
        console.log('Error paying bill:', error);
        this.paymentResult = 'Payment failed';
      }
    });
  }

  addBalance(amount: number): void {
    this.cartService.addBalance(this.username, amount).subscribe({
      next: () => {
        this.loadBalance();
        this.calculateBill();
      },
      error: (error) => {
        console.log('Error adding balance:', error);
      }
    });
  }

  loadBalance(): void {
    this.cartService.displayBalance(this.username).subscribe({
      next: (response) => {
        this.balance = response.balance;
      },
      error: (error) => {
        console.log('Error loading balance:', error);
      }
    });
  }

  isValidCartItem(item: any): boolean {
    return item && item.pro_id && item.pro_name && item.pro_cost && item.quantity;
  }
}
