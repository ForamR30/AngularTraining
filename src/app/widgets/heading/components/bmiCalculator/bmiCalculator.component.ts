import { Component } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";
import { BmiCalculatorService } from "src/app/services/bmiCalculator.service";

@Component({
  templateUrl:"./bmiCalculator.component.html",
  selector:"bmi-calc-comp"
})

export class BmiCalculatorComponent{
  calcservice:BmiCalculatorService;
  bmiResult:number=0;

  //constructor injection
constructor(service:BmiCalculatorService){
  this.calcservice=service;
}

  calculateBmi(data:BmiInputModel){
    //this.bmiResult=data.height* data.weight;
    this.bmiResult=this.calcservice.calculateBmi(data);
  }
  clear(){
    this.bmiResult=0;
  }
}
