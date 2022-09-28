import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorDashboardComponent } from "../components/calculator-dashboard/calculator-dashboard.component";
import { BmiCalculatorComponent } from "../widgets/heading/components/bmiCalculator/bmiCalculator.component";

const routes: Routes = [
  {path:"",component:CalculatorDashboardComponent,children:[
    {path:"bmi",component:BmiCalculatorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalculatorsRoutingModule {}