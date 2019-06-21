import { Component, OnInit,Input   } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service'; 
import {CustomerComponent} from '../customer/customer.component';

import { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})

export class EditCustomerComponent {
  customer = new Customer();
 
  submitted = false;
  constructor(
    private customerService: CustomerService,
    private location: Location
    
  )
  { }
  @Input () custEdit:Customer; 
  ngAfterViewInit() {
    
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

 editCustomer() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.customer);
    this.customerService.editCustomer(this.customer)
        .subscribe();
  }
}
