import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { LoginModel } from "src/app/models/login.model";
import { AccountsService } from "src/app/services/accounts.service";

@Component({
  templateUrl:"./login-form.component.html",
  // <app-root></app-root>
  selector:'app-login-form-component',//create instance of this component and present
  styleUrls:['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userName:string="";
  passWord:string="";
  @Output()
  submitEM = new EventEmitter<LoginModel>();
  //form: FormGroup;
  constructor( private routerService:Router, private accService: AccountsService) {}
  ngOnInit(): void {
    
  }
  submit(){
    //if(this.form.valid){
      //const loginModel= new LoginModel(this.form.value["username"],this.form.value["password"]);
      const loginModel= new LoginModel(this.userName,this.passWord);
      this.submitEM.emit(loginModel);
    
    console.log("login submitted");
    this.accService.validateCredentials(this.userName,this.passWord).subscribe(
      (result)=>{
        if(result){
          this.routerService.navigate(['/main-cards']);
        }
        console.log(result);
      },
      (error)=>{console.log(error);},
      ()=>{console.log("request completed")}
      );
    // }
    // else{
    //   //this.error=this.form.value.errors;
    // }
    //this.routerService.navigate(['/main-cards']);
  }
}
