import { Component, OnInit, Output } from '@angular/core';
import { ClicksService } from 'src/app/Model/clicks.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private event: ClicksService) { }

  ngOnInit(): void {
  }

  sendClick(click: string) {
    this.event.getClick(click);
  }

}