import { Inject, Injectable } from "@angular/core";
import { BmiInputModel } from "../models/bmiInput.model";
import { ILoggerService } from "./loggerContract.service";

@Injectable()
export class BmiCalculatorService {

  loggerService: ILoggerService;
  constructor(@Inject("logger")logger:ILoggerService){
    this.loggerService=logger;
  }
  calculateBmi (data: BmiInputModel):number{
    this.loggerService.write("calculate bmi called");
    return data.height*data.weight*2;
  }
}