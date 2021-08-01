import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/header-search/header-search.component';
import { LoginComponent } from './components/login/login.component';
import { SortComponent } from './components/sort/sort.component';



@NgModule({
  declarations: [
    SearchComponent,
    LoginComponent,
    SortComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
