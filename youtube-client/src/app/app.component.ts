import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    b: any = false;
    c:any = '';

    message:string | undefined;

    tst(a: any) {
        this.b = a;
    }


    test2() {
        if(!this.c || this.c === "desc"){
            this.c = 'asc'
        }
        else {
            this.c = 'desc'
        }
        console.log(this.c)
    }
}
