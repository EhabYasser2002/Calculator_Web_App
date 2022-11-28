package com.example.BackEnd.Model;

import java.lang.Math;

public class Calculator implements ICalculator {
    double num1, num2;
    public Calculator(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    public double calculate(String op) {
        double res;
        if(op.equals("×")) res = this.num1 * this.num2;
        else if(op.equals("÷")) res = num1 / num2;
        else if(op.equals("+")) res = this.num1 + this.num2;
        else if(op.equals("–")) res = num1 - num2;
        else if(op.equals("inv")) res = 1 / num1;
        else if(op.equals("sqrt")) res = Math.sqrt(num1);
        else if(op.equals("pow2")) res = Math.pow(num1, 2);
        else if(op.equals("percent")) res = num1 / 100;
        else res = num1;
        return res;
    }

}
