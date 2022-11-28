import { Injectable } from '@angular/core';
import { HttpService } from '../Controller/http.service';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private service: HttpService) { }

  screenString: string="";
  operator: string="";

  data: Data = new Data;

  butType(but: string): number {
    if(but == '+' || but == '–' || but == '×' || but == '÷') return 1;
    else if(but == 'percent' || but == 'sqrt' || but == 'pow2' || but == 'inv') return 2;
    else if(but == 'C' || but == 'CE') return 3;
    else if(but == 'del') return 4;
    else if(but == '.') return 5;
    else if(but == 'sign') return 6;
    else if(but == '=') return 7;
    else return 8;
  }

  sendRequest(op: string) {
    var splitted = this.screenString.split(this.operator);
    if(this.butType(this.operator) == 1 && splitted[1] == "") splitted[1] = splitted[0];
    this.data.setNum1(splitted[0]);
    this.data.setNum2(splitted[1]);
    this.data.setOperator(this.operator);
    console.log(this.data);
    if(this.butType(op) == 1) this.operator=op;
    else if(this.butType(op) == 2 || this.butType(op) == 7) this.operator="";
    this.service.postRequest("http://localhost:8080/calculate", this.data)
    .subscribe(
      (data:string) => { 
      this.screenString = data + this.operator;
      console.log(this.screenString);
      }
    )
  }

}
