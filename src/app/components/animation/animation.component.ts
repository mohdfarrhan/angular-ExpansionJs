import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [
    trigger('myAnimation', [
      state('active', style({
        backgroundColor: 'green',
        transform:'scale(1)'
      })),
      state('inactive', style({
        backgroundColor: 'red',
        transform:'scale(1.5)'
      })),
      transition('active => inactive', animate('500ms ease-in')),
      transition('inactive => active', animate('500ms ease-out'))
    ])
  ]
})
export class AnimationComponent {
  currentState = "active";

  toggleState() {
    this.currentState = this.currentState === 'active' ? 'inactive' : 'active';
  }

}
