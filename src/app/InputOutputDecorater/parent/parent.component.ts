import { Component } from '@angular/core';

@Component({
  selector: 'app-iod-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  theChildData: any = 'Hello My name is parent data I am from parent component';

  displayNameForChild :any = []


  getChildData(name:any){
    this.displayNameForChild.push(name)
  }
}
