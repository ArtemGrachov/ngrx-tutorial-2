import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users', children: [
      { path: ':userId', loadChildren: './pages/user/user-page.module#UserPageModule' },
      { path: '', loadChildren: './pages/users/users-page.module#UsersPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }