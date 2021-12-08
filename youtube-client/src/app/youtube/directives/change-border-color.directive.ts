import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColor]'
})
export class ChangeBorderColorDirective implements OnInit {

    currentDate:any = new Date();
    @Input() public publicDate!: string;

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    ngOnInit():void {
        let publishedDate:any = new Date(this.publicDate);
        let differenceBetweenDate = Math.floor(Number((this.currentDate - publishedDate)/86400000));
        if ( differenceBetweenDate < 7) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #27ae60');
        }
        if ( differenceBetweenDate > 7 && differenceBetweenDate <= 31) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #2f80ed');
        }
        if ( differenceBetweenDate > 31 && differenceBetweenDate < 183) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #F2C94C');
        }
        if ( differenceBetweenDate >= 183) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #EB5757');
        }
    }
}
