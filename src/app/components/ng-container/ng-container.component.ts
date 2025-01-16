import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  products = [
    { name: 'Mobile' },
    { name: 'Smart Watch' },  
    { name: 'Laptop' },
    { name: 'Tablet' }
  ]

  status = true;
}
