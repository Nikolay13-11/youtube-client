import { Component, OnInit } from '@angular/core';

import { HttpYoutubeService } from './youtube/services/http-youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


    loading = false

    constructor(private todoService:HttpYoutubeService) {}


    ngOnInit() {
        // this.fetchTodos();
        // this.fetchStatistic();
    }

    fetchTodos() {
        this.todoService.fetchTodos()
        .subscribe(item => {
            console.log(item);

        })
    }
    fetchStatistic() {
        this.todoService.fetchStatistic()
        .subscribe(item => {
            console.log(item);

        })
    }
}
