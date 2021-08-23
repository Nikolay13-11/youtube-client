import { Component, OnInit } from '@angular/core';

import { HttpService, Todo } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    todos: Todo[] = []

    loading = false

    constructor(private todoService:HttpService) {}

    ngOnInit() {
        this.fetchTodos()
    }

    fetchTodos() {
        this.loading = true
        this.todoService.fetchTodos()
        .subscribe(todos => {
            this.todos = todos
            this.loading = false
        })
    }
}
