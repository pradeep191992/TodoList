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
  {
    path: 'create-todo',
    pathMatch: 'full',
    loadChildren: () => import('./feature/create-todo/create-todo.module').then(m => m.CreateTodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
