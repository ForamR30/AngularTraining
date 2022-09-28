import { Component, Inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ILoggerService } from "src/app/services/loggerContract.service";

@Component({
  templateUrl:"./appRoot.component.html",
  // <app-root></app-root>
  selector:'app-root',//create instance of this component and present
  styleUrls:['./appRoot.component.css']
})
export class AppRootcomponent {
  prop:string="";//state
  constructor(@Inject("logger")loggerService:ILoggerService){
    loggerService.write("AppRootComponent instantiated");
  }

  onTextBoxEdited(textValue: string){
    this.prop=textValue;
  }

  // changePropValue(){
  //   let x = Math.random()*100;
  //   this.prop = x.toString();
  // }Program 2

  onFormSubmit(formGroup:FormGroup){
    if(formGroup.valid){
      console.log("Valid form");
    }
    else{
    console.log(formGroup);
  }
  }
}
