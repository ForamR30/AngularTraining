import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges, HostBinding } from "@angular/core";

@Directive({
  selector:'[textColor]'
})

export class TextColorDirective implements OnInit, OnChanges
{
  @Input() textColor:string="";
  constructor(private targetElement:ElementRef, private domApi:Renderer2){
    console.log(targetElement.nativeElement);//dom element
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }
  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(){
    //this.domApi.setStyle(this.targetElement.nativeElement,"color",this.textColor||"blue");
    this.color=this.textColor||"blue"
  }

  @HostBinding("style.color")
  color="blue"

  @HostListener("mouseenter")
  onMouseOverHostElement(){
    //this.domApi.setStyle(this.targetElement.nativeElement,"color",this.textColor||"green");
    this.color="green"
  }

  @HostListener("mouseleave")
  onMouseLeaveFromHostElement(){
    //this.domApi.setStyle(this.targetElement.nativeElement,"color",this.textColor||"white");
    this.color="white"
  }
}
