import { NgModule } from "@angular/core";
import { AppRootcomponent } from "./components/appRoot/appRoot.component";
import { BrowserModule } from "@angular/platform-browser"
import { WidgetsComponent } from "./widget.module";
import { BmiCalculatorService } from "./services/bmiCalculator.service";
import { FileLoggerService } from "./services/fileLogger.service";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from '@angular/router';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { HttpClientModule } from '@angular/common/http'
import { AccountsService } from "./services/accounts.service";
import { TextColorDirective } from "./directives/textColor.directive";
import { HomeComponent } from "./components/home/home.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { AutheticateRouteGuard } from "./routeGuards/authenticateRouteGuard";
import { AppRoutingModule } from "./app-routing.module";

// import { MatCardTitle } from "@angular/material/card";
// import { MatCardContent } from "@angular/material/card";

//decorators - TS building block, supports metadata prog.
@NgModule({
  declarations:[AppRootcomponent,TextColorDirective,HomeComponent],//means what this module contains of
  imports:[BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, AppRoutingModule, 
    RouterModule, HttpClientModule, WidgetsComponent,MatCardModule,MatInputModule, MatButtonModule],//WidgetsComponent
  exports:[],
  providers:[
    AccountsService,
    AutheticateRouteGuard,
    {/*token*/provide:BmiCalculatorService,useClass: BmiCalculatorService},
    {provide:"logger",useClass:FileLoggerService}
  ],
  bootstrap:[AppRootcomponent]
})
export class AppModule{

}
