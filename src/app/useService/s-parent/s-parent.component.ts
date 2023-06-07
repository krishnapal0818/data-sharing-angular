import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-s-parent',
  templateUrl: './s-parent.component.html',
  styleUrls: ['./s-parent.component.css'],
})
export class SParentComponent implements OnInit {
  message: string = '';
  approvalText: string = '';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.cureentMsg.subscribe((res) => {
      console.log(res);
      this.approvalText = res
    });
  }
  submit() {

    this.dataService.updateMessage(this.approvalText)
  }
}
