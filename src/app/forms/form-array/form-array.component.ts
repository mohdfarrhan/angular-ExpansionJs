import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent {
  constructor(private fb:FormBuilder){}
  isSubmitted: boolean = false;
  count =0;
  formData = {
    name: '',
    mbNo: '',
    family: [
      {
        rname: '',
        relation: ''
      }
    ]

  }
 
  
  ngOnInit():void {
   
  }

  myForm = this.fb.group({
    name: ['', [Validators.required]],
    mbNo: ['', [Validators.required]],
    family:this.fb.array([])
  });

 

  addMember(){
    this.count++;
    if(this.count >=2){
      this.formData.family.push({rname: '', relation: ''})
    }
    this.members.push(this.memberAdded())
  }
  get members():FormArray{
    return this.myForm.get('family') as FormArray;
  }

  memberAdded(){
    return this.fb.group({
      rname: ['', [Validators.required]],
      relation: ['', [Validators.required]]
    })
  }

  removeMember(){
    this.isSubmitted = false;
    this.members.removeAt(this.members.length-1);
    this.count--;
    this.formData.family.splice(this.count);
  }
  onSubmit(form:FormGroup){
    this.isSubmitted = true;
    this.formData.name = form.value.name;
    this.formData.mbNo = form.value.mbNo;
    for(let i=0;i<this.count;i++){
      this.formData.family[i].rname = form.value.family.rname;
      this.formData.family[i].relation = form.value.family.relation;
    }
  }

}
