import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../../../services/customer.service';
import {MaterialModule} from '../../../material.module';

@Component({
  selector: 'app-customers',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      salary: ['', [Validators.required, Validators.min(1)]],
      address: this.fb.group({
        streetLine1: ['', Validators.required],
        streetLine2: [''],
        city: ['', Validators.required],
        province: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const requestData = {
        name: this.customerForm.value.name,
        address: `${this.customerForm.value.address.streetLine1}, ${this.customerForm.value.address.streetLine2}, ${this.customerForm.value.address.city}, ${this.customerForm.value.address.province}, ${this.customerForm.value.address.country}`,
        salary: this.customerForm.value.salary,
      };
      console.log('Submitting:', requestData);

      this.customerService.addCustomer(requestData).subscribe(
        (response) => {
          console.log('Customer added successfully:', response);
          alert('Customer added successfully!');
          this.customerForm.reset();
        },
        (error) => {
          console.error('Error adding customer:', error);
          alert('Failed to add customer.');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
