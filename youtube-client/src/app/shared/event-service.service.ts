import { EventEmitter } from '@angular/core';

export class ShareService {
    private clickCnt:boolean = false;
    onClick:EventEmitter<boolean> = new EventEmitter();

    public doClick(){
      this.clickCnt = true;
      this.onClick.emit(this.clickCnt);
    }
}
