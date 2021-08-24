import { Component } from '@angular/core';

import { SortParamsService } from 'src/app/youtube/services/sort-params.service';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.scss']
})
export class ButtonSettingComponent  {
    state = false

    constructor(private sortPanelState: SortParamsService) {}

    OpenPanel() {
        this.state = !this.state
        this.sortPanelState.nextPanelState(this.state)
    }
}
