import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BmiCalculatorComponent } from "./widgets/heading/components/bmiCalculator/bmiCalculator.component";
import { BmiInputComponent } from "./widgets/heading/components/bmiCalculator/bmiInput/bmiInput.component";
import { BmiResultComponent } from "./widgets/heading/components/bmiCalculator/bmiResult/bmiResult.component";
import { HeadingComponent } from "./widgets/heading/heading.component";
import { MatCardModule} from "@angular/material/card"
import { MatInputModule} from "@angular/material/input"
import { MatButtonModule} from "@angular/material/button"
import { LoginFormComponent } from "./widgets/heading/components/bmiCalculator/login-form/login-form.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { MainCardsComponent } from "./components/main-cards/main-cards.component";

@NgModule({
  declarations:[HeadingComponent, BmiCalculatorComponent, BmiResultComponent, BmiInputComponent,LoginFormComponent,MainCardsComponent],//means what this module contains of
  imports:[BrowserModule,MatCardModule,MatInputModule, MatButtonModule, FormsModule, AppRoutingModule,RouterModule],
  exports:[HeadingComponent, BmiCalculatorComponent, BmiResultComponent, BmiInputComponent,LoginFormComponent,MainCardsComponent],
  providers:[]
})

export class WidgetsComponent{

}
