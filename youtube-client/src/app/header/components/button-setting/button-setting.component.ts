import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.scss']
})
export class ButtonSettingComponent  {
    SortState = false;
@Output() ToggleSortPanelEvent  = new EventEmitter();

public ToggleSortPanelActive() {
    this.SortState = !this.SortState;
    this.ToggleSortPanelEvent.emit(this.SortState)
}

}
