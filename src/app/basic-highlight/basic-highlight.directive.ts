import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    //constructor(private elementRef:ElementRef){}
    constructor(private elementRef:ElementRef,private renderer:Renderer2){}

    ngOnInit(): void {
       // this.elementRef.nativeElement.style.backgroundColor='green';
       this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    }
}