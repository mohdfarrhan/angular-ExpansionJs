import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CrudComponent implements OnInit {
  title = 'httpClient with Service angular';
  users = new Array();
  name:string = 'Angular';
  constructor(private userService: UserService, private http: HttpClient,private cdRef:ChangeDetectorRef) {}
  
  ngOnInit(): void {}
  loadUser() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
      this.name = "frontend";
      setTimeout(() => {
        this.cdRef.detectChanges();
        
      },5000)
    });
  }
  

  // postData: any[] = [];
  // newPost = {
  //   id: 1,
  //   userId: 5,
    // title: 'how to run application',
  //   body: 'To run your Angular application, follow these steps:',
  // };
  // updatedPost = {
  //   id: 2,
  //   userId: 4,
  //   title: "what to do and don't do",
  //   body: "Here are some do's and don'ts when running and managing an Angular application:",
  // };
  // deleteId = 3;

  // getPost() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((result) => {
  //       this.postData = result;
  //     });
  // }
  // addPost() {
  //   this.http
  //     .post('https://jsonplaceholder.typicode.com/posts', this.newPost)
  //     .subscribe((post) => {
  //       this.posts.push(post);
        
  //     });
  // }

  // updatePost() {
  //   const id = this.updatedPost.id;
  //   this.http
  //     .put(`https://jsonplaceholder.typicode.com/posts/${id}`, this.updatedPost)
  //     .subscribe((updatedPost) => {
  //       const index = this.posts.findIndex((p:any) => p.id === id);
  //     if (index !== -1) this.posts[index] = updatedPost;

  //     });
  // }

  // deletePost() {
  //   this.http
  //     .delete(`https://jsonplaceholder.typicode.com/posts/${this.deleteId}`)
  //     .subscribe(() => {
  //       this.posts = this.posts.filter((p: any) => p.id !== this.deleteId);
  //     });
  // }
}
