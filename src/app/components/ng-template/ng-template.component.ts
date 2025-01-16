import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  isUserLoggedIn = false;
  loggedUserName = "farhan";

  @ViewChild('dynamicTem') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dyanmicContainer: ViewContainerRef | undefined;
    loadTemplateContent(){
      if(this.dynamicTemplate){
        this.dyanmicContainer?.createEmbeddedView(this.dynamicTemplate);
      }
  }
}
