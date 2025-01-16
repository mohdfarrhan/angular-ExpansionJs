import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-ng-content',
  imports: [CommonModule, CardComponent],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent {
  

}