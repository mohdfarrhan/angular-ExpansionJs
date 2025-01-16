import { Component } from '@angular/core';
import { DepartmentService } from '../../service/department.service';

console.warn("Home component loaded")

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {


  // constructor(private deptSrv:DepartmentService){
  //   const result = this.deptSrv.addTwoNum(10,20);
  //   console.log(result);
  // }
//  obj:Object = {
//     name:"test",
//     logo:"image.png"
//   }
  
//   getDepartment(){
//     this.deptSrv.getAllDepartments().subscribe((res:any)=>{
//       console.log(res);
//     })
//   }
//   onSave(){
//     this.deptSrv.saveNewDept(this.obj).subscribe((res:any)=>{
//       if(res.result){
//         alert("Department saved successfully");
//         this.getDepartment();
//       }
//       else{
//         alert(res.message);
//       }
//     })
//   }




}
