import { Injectable } from '@angular/core';
import { HttpService } from '../Controller/http.service';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private service: HttpService) { }

  screenString: string="0";
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

  split() {
    return this.screenString.split(this.operator);
  }

  sendRequest() {
    console.log(this.data);
    this.service.postRequest("http://localhost:8080/calculate", this.data)
    .subscribe(
      (data:string) => { 
      this.screenString += data;
      if(String(this.data.getNum2()) != "NaN") this.screenString += this.operator;
      console.log(this.screenString);
      }
    )
  }

}
