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
    else if(but == 7) this.equal();
    else if(but == 8) this.addNum(click);
  }

  addDoubleOperator(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.operator != "" && this.att.butType(lastChar) == 8) {
      let splitted = this.att.split();
      this.att.data.setNum1(splitted[0]);
      this.att.data.setNum2(splitted[1]);
      this.att.data.setOperator(this.att.operator)
      this.att.operator = input;
      this.att.screenString = "";
      this.att.sendRequest(); 
      return;
    }
    else if(this.att.butType(lastChar) == 1 || this.att.butType(lastChar) == 5) this.delete();
    this.att.operator = input;
    this.att.screenString += input;
  }

  addSingleOperator(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.butType(lastChar) == 1 || this.att.butType(lastChar) == 5) this.delete();
    if(this.att.operator != "") {
      let splitted = this.att.split();
      this.att.data.setNum1(splitted[1]);
      this.att.screenString = splitted[0] + this.att.operator;
      if(input == "inv" && Number(splitted[1]) == 0) {this.error(); return;}
    }
    else {
      this.att.data.setNum1(this.att.screenString);
      if(input == "inv" && Number(this.att.screenString) == 0) {this.error(); return;}
      this.att.screenString = "";
    }
    this.att.data.setNum2("Nan");
    this.att.data.setOperator(input);
    this.att.sendRequest();
  }

  deleteAll() {
    this.att.screenString = "0";
    this.att.operator="";
  }

  delete() {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.butType(lastChar) == 1) this.att.operator = "";
    this.att.screenString = this.att.screenString.slice(0, -1);
    if(this.att.screenString == "") this.att.screenString = "0";
  }

  addDot(input: string) {
    let lastChar: string = this.att.screenString.charAt(this.att.screenString.length-1);
    if(this.att.butType(lastChar) == 1) this.att.screenString += '0';
    else if(this.att.butType(lastChar) == 5) return;
    this.att.screenString += input;    
  }

  changeSign() {
    if(this.att.screenString == "0") this.att.screenString = "-";
    else if(this.att.screenString == "-") this.att.screenString = "0";
    else if(this.att.screenString.charAt(0) == '-') this.att.screenString = this.att.screenString.slice(1);
    else this.att.screenString = '-' + this.att.screenString;
  }

  equal() {
    if(this.att.operator == "") return;
    let splitted = this.att.split();
    if(splitted[1] == "") splitted[1] = splitted[0];
    this.att.data.setNum1(splitted[0]);
    this.att.data.setNum2(splitted[1]);
    this.att.data.setOperator(this.att.operator);
    if(this.att.operator == "÷" && Number(splitted[1]) == 0) {this.error(); return;}
    this.att.operator = "";
    this.att.screenString = "";
    this.att.sendRequest();
  }

  addNum(input: string) {
    if(this.att.screenString=="0") this.att.screenString = input;
    else this.att.screenString += input;
  }

  error() {
    this.att.screenString = "Error!!";
    this.att.operator = "";
  }

}