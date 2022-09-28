import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AccountsService {
  constructor(private http:HttpClient) {
    
  }

  validateCredentials(email: string, password: string) {
    return this.http.post("http://localhost:52377/api/values",{"Email":email,"Password":password});
  }

}