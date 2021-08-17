import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    // {
    //     path: '',
    //     component: SearchResultsComponent,
    // },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule)
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
