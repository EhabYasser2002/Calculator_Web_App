import { Injectable } from '@angular/core';
import { AttributesService } from './attributes.service';

@Injectable({
  providedIn: 'root'
})
export class ClicksService {

  constructor(private att: AttributesService) { }

  getClick(click: string) {
    let but: number = this.att.butType(click);
    if(but == 1) this.addDoubleOperator(click);
    else if(but == 2) this.addSingleOperator(click);
    else if(but == 3) this.deleteAll();
    else if(but == 4) this.delete();
    else if(but == 5) this.addDot(click);
    else if(but == 6) this.changeSign();
    else if(but == 7) this.att.sendRequest(click);
    else if(but == 8) this.addNum(click);
  }

  addDoubleOperator(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.screenString == "") return;
    if(this.att.operator != "" && this.att.butType(lastChar) == 8) {this.att.sendRequest(input); return;}
    else if(this.att.butType(lastChar) == 1) {
      this.delete();
      this.att.operator="";
      this.att.operator=input;
    }
    else if(this.att.butType(lastChar) == 5) {
      this.delete();
      if(this.att.screenString == "") return;
      this.att.operator=input;
    }
    else if(this.att.butType(lastChar) == 8) this.att.operator=input;
    this.att.screenString += input;
  }

  addSingleOperator(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.screenString == "") return;
    if(this.att.butType(lastChar) == 2 || this.att.butType(lastChar) == 5) this.delete();
    this.att.operator = input;
    this.att.sendRequest(input);
  }

  deleteAll() {
    this.att.screenString = "";
    this.att.operator="";
  }

  delete() {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.butType(lastChar) == 1) this.att.operator="";
    this.att.screenString = this.att.screenString.slice(0, -1);
  }

  addDot(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.butType(lastChar) == 1) {
      this.delete();
      this.att.operator="";
    }
    else if(this.att.butType(lastChar) == 5) return;
    this.att.screenString += input;    
  }

  changeSign() {
    if(this.att.screenString.charAt(0) == '-') this.att.screenString = this.att.screenString.slice(1);
    else this.att.screenString = '-' + this.att.screenString;
  }


  addNum(input: string) {
    this.att.screenString += input;
  }
}