import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../custompipe/na.pipe';

@Component({
  selector: 'app-defpipe',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    NaPipe,
  ],
  templateUrl: './defpipe.component.html',
  styleUrl: './defpipe.component.css',
})
export class DefpipeComponent {
  name: string = 'Angular';
  sen: string = 'I am Angular developer';
  currentDate: Date = new Date();
  person: any = { name: 'Pera', age: 20, role: 'developer' ,state:""};
}
