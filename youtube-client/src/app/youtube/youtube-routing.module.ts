import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
    {
        path: '',
        component: SearchResultsComponent,
    },
    {
        path: ':id',
        component: DetailComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
