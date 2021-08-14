import { Component } from '@angular/core';

import { response } from 'src/app/response';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {


    items = response.items

}
