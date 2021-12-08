import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './auth/guards/login.guard';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        redirectTo: 'main/admin',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule),
    },
    {
        path: 'main',
        loadChildren: () => import('./youtube/youtube.module')
        .then(m => m.YoutubeModule),
        canActivate: [LoginGuard]
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
