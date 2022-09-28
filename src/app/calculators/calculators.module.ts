import { NgModule } from "@angular/core";
import { CalculatorDashboardComponent } from "../components/calculator-dashboard/calculator-dashboard.component";
import { CalculatorsRoutingModule } from "./calculators-routing.module";


@NgModule({
  declarations:[CalculatorDashboardComponent],//means what this module contains of
  imports:[CalculatorsRoutingModule],
  exports:[],
  providers:[]
})

export class CalculatorsModule{

}
