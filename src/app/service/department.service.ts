import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartments() {
    return this.http.get("https://projectapi.gerasim.in/api/Department/GetAllDepartments");
  }

  saveNewDept(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/",obj)
  }

  addTwoNum(num1:number,num2:number){
    return num1+num2;
  }
}
