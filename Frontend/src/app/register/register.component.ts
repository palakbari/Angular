import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  name: string;
  mobile: any;

  Employees = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }
  
  constructor(private registerService: RegisterService) {}

  fetchEmployees() {
    this.registerService.getEmployees().subscribe(
      (data) => {
        console.log(data);
        this.Employees = data;
      }
    )
  }

  onSubmit() {
    const insertData = {
      name: this.name,
      mobile_number: this.mobile
    }
    this.registerService.insertEmployee(insertData).subscribe(
      (data) => {
        console.log(data);
        this.fetchEmployees();
      }
    )
  }
}
