import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColor]'
})
export class ChangeBorderColorDirective implements OnInit {
    // cards = response.items[this.elRef.snippet.publishedAt]
    i:number = 2;
    currentDate = new Date();
    @Input() public publicDate!: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
      console.log(elRef.nativeElement);
  }



  ngOnInit():void {
    console.log(this.publicDate)

    if ( this.i > 3) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #27ae60');
    }
    if ( this.i < 3) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #2f80ed');
    }
    if ( this.i = 3) {
        this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '5px solid #eb5757');
    }
  }


}


//   [ngClass]="{
//     border_blue: differenceDate(item.snippet.publishedAt) < 7,
//     border_green: differenceDate(item.snippet.publishedAt) < 30 && differenceDate(item.snippet.publishedAt) > 7,
//     border_red: differenceDate(item.snippet.publishedAt) > 183
//  }

// differenceDate = (publish:string) => {
//     let date:any = new Date;
//     let publishDate:any = new Date(publish)
//     return Math.floor(Number((date - publishDate)/86400000))
// }
