import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
@Output() EventFromHeader = new EventEmitter();


    onNotify(event: any) {
        this.EventFromHeader.emit(event)
    }
}
