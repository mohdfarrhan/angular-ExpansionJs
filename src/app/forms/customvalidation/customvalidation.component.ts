import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customvalidation',
  imports: [ReactiveFormsModule],
  templateUrl: './customvalidation.component.html',
  styleUrl: './customvalidation.component.css'
})
export class CustomvalidationComponent {
loginForm:any = new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,this.passwordStrengthValidator])
})

passwordStrengthValidator(control: AbstractControl) {
  const password: string = control.value;
  if(!password) return;

  const hasUpperCase = /[A-Z]+/.test(password);
  const hasLowerCase = /[a-z]+/.test(password);
  const hasNumeric = /[0-9]+/.test(password); 

  const valid = hasUpperCase && hasLowerCase && hasNumeric;

  return valid? null : {passwordStrength: true};

}
}
