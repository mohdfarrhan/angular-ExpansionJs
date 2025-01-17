import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
  student:any = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptesTerms: false
  }
  formValue:any;
  onSubmit(){
    this.formValue = this.student;
  }
}
