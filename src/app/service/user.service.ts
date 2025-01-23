import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    const url ="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
  postData(post:any):Observable<any>{
    const url ="https://jsonplaceholder.typicode.com/posts";
    return this.http.post(url,post);
  }

  deleteData(){
    const url ="https://jsonplaceholder.typicode.com/posts";
    return this.http.delete(url);
  }

  updateData(id:Number){
    const url ="https://jsonplaceholder.typicode.com/posts";
    return this.http.put(url,id);
  }
}
