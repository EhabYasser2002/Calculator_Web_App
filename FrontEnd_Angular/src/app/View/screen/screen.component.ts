import { Component, OnInit } from '@angular/core';
import { AttributesService } from 'src/app/Model/attributes.service';
import { ClicksService } from 'src/app/Model/clicks.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor(private view: AttributesService) { }

  ngOnInit(): void {
  }

  getText(): string {
    return this.view.screenString;
  }
  
}