import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 private hasunsavedChanges = true;
 canDeactive() {
   if(this.hasunsavedChanges){
    return confirm("Are you sure you want to leave? please save first");
 }
 return true
}
saveChanges(){
  this.hasunsavedChanges = false;
}

}
