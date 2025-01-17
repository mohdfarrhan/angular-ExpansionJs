import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nfg',
  imports: [ReactiveFormsModule],
  templateUrl: './nfg.component.html',
  styleUrl: './nfg.component.css',
})
export class NfgComponent {
  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstname: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
    console.log(this.profileForm.value);
  }
}
