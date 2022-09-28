import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent implements OnInit, OnDestroy {

  currentUser:string|null="";
  subscriptionReference?:Subscription;
  constructor(private activateRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.subscriptionReference?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionReference=this.activateRoute.paramMap.subscribe((params)=>{
      this.currentUser=params.get("userName")})
  }

}
