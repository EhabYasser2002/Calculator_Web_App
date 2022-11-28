package com.example.BackEnd.Controller;

import com.example.BackEnd.Model.Data;
import com.example.BackEnd.Model.Calculator;
import com.example.BackEnd.Model.ICalculator;
import org.springframework.web.bind.annotation.*;

@RestController
public class HttpService {

    @GetMapping(value = "/")
    public String str() {
        return "Hello There!";
    }

    @CrossOrigin(value = "http://localhost:4200")
    @PostMapping("/calculate")
    public double calculate(@RequestBody Data data) {
        double num1 = data.getNum1();
        double num2 = data.getNum2();
        ICalculator cal = new Calculator(num1, num2);
        return cal.calculate(data.getOperator());
    }

}
