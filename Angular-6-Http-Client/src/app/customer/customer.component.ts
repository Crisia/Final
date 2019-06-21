import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent  implements OnInit {

  customers: Customer[];
  custEdit: Customer;

  constructor(private customerService: CustomerService) {}
  filterPost = '';

  ngOnInit(): void {
     this.getCustomers();
  }

  getCustomers() {
    return this.customerService.getCustomers()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.customers = customers
                 }
                );
 }
 deleteCustomers(customer: Customer)
 {
  const index = this.customers.indexOf(customer);
  this.customers.splice(index, 1);
  this.customerService.deleteCustomer(customer.id).subscribe();
 }

 editar(customer: Customer)
 {
  
  this.custEdit = customer;
  alert(this.custEdit.id);
 }

 editar2(id:any)
 {
   
 }

}
