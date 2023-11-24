import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    @HostBinding('style.backgroundColor')backgroundColor:string='transparent';

    //constructor(private elementRef:ElementRef){}
    constructor(private elementRef:ElementRef,private renderer:Renderer2){}

    ngOnInit(): void {
       // this.elementRef.nativeElement.style.backgroundColor='green';
       //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
        this.backgroundColor='blue';
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
        this.backgroundColor='transparent';        
    }
}