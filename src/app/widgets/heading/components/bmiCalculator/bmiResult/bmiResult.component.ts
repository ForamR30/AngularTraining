import { Component, Input, OnInit } from "@angular/core";

@Component({
  templateUrl:"./bmiResult.component.html",
  selector:"app-bmi-result"
})

export class BmiResultComponent implements OnInit{
  @Input() bmi:number=0;
  constructor(){}
  ngOnInit(): void {
      
  }

}
