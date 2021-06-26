import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'scss-var',
    pathMatch: 'full',
    loadChildren: () => import('./feature/scss/scss.module').then(m => m.ScssModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
