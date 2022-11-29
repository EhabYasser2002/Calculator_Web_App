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
        switch (op) {
            case "×" -> res = num1 * num2;
            case "÷" -> res = num1 / num2;
            case "+" -> res = num1 + num2;
            case "–" -> res = num1 - num2;
            case "inv" -> res = 1 / num1;
            case "sqrt" -> res = Math.sqrt(num1);
            case "pow2" -> res = Math.pow(num1, 2);
            case "percent" -> res = num1 / 100;
            default -> res = num1;
        }
        return res;
    }

}
