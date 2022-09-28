import { Component, Input } from "@angular/core";

@Component({
  templateUrl:"./heading.component.html",
  selector:"heading-component"
})

export class HeadingComponent{
  @Input()
  message:string="";
}
