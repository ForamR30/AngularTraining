import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { AutheticateRouteGuard } from './routeGuards/authenticateRouteGuard';
import { LoginFormComponent } from './widgets/heading/components/bmiCalculator/login-form/login-form.component';
const routes: Routes = [
  /*Route objects*/
  {path:"", redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent, children:[
    {path:"login",component:LoginFormComponent}
  ]},
  {path:"main-cards", component:MainCardsComponent, children:[
    {path:"calculators",loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)}
  ], canActivate:[AutheticateRouteGuard]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
