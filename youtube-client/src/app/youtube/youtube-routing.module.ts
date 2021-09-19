import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
    },
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
