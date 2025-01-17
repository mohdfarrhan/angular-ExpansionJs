import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveformComponent],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  studentaForm: FormGroup = new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastname: new FormControl(),
    username: new FormControl("some@123",[Validators.required,Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptesTerms: new FormControl()
  });
  formValue: any;
  onSubmit() {
    this.formValue = this.studentaForm.value;
  }
}
