import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    SearchResultsComponent
} from './search/components/search-results/search-results.component';

const routes: Routes = [
    {
        path: '',
        component: SearchResultsComponent,
    },
    {
        path: 'core',
        loadChildren: () => import('./core/core.module')
        .then(m => m.CoreModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
