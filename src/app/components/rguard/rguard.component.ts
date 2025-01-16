import { Component } from '@angular/core';

@Component({
  selector: 'app-rguard',
  imports: [],
  templateUrl: './rguard.component.html',
  styleUrl: './rguard.component.css'
})
export class RguardComponent {
setRole(role:string){
  localStorage.setItem('userRole',role);
}
}
