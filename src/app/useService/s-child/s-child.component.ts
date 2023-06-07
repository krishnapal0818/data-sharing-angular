import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-s-child',
  templateUrl: './s-child.component.html',
  styleUrls: ['./s-child.component.css'],
})
export class SChildComponent implements OnInit {
  storeMessage: string = '';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.cureentMsg.subscribe((res) => {
      this.storeMessage = res;
    });
  }

  submit() {
    this.dataService.updateMessage(this.storeMessage);
  }
}
