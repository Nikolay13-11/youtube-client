import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
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
