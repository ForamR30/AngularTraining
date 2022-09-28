import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";

@Component({
  templateUrl:"./bmiInput.component.html",
  selector:"app-bmi-input"
})

export class BmiInputComponent implements OnInit {
  height:number=0;
  weight:number=0;
  @Output()
  inputAvailableEvent = new EventEmitter<BmiInputModel>();
  @Output()
  clearEvent = new EventEmitter();
  constructor() {}
  ngOnInit(): void {
      
  }
  onHeightEdit(height:string){
    this.height=parseInt(height);
  }
  onWeightEdit(weight:string){
    this.weight=parseInt(weight);
  }
  clear(){
    this.height=0;
    this.weight=0;
    this.clearEvent.emit();

  }
  calculateBmi(){
    const data = new BmiInputModel(this.height, this.weight);
    this.inputAvailableEvent.emit(data);
  }
}
