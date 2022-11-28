export class Data {
    
    private num1 = 0;
    private num2 = 0;
    private operator = "";

    setNum1(num1: string) {this.num1 = Number(num1)}
    setNum2(num2: string) {this.num2 = Number(num2)}
    setOperator(operator: string) {this.operator = operator}

    getNum1() {return this.num1}
    getNum2() {return this.num2}
    getOperator() {return this.operator}

}