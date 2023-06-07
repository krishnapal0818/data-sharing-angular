import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() getChildData :any =''
  @Output() theParentData = new EventEmitter();

  name : string = ''

  ngOnInit(): void {
    console.log(this.getChildData);
    
  }

  onSendDataFormParent(){
    this.theParentData.emit(this.name)
    this.name = ''

  }

}
