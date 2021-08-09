import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.scss']
})
export class ButtonSettingComponent  {
@Output() notify  = new EventEmitter();


}
