import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';

import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent }
]

@NgModule({
  declarations: [PageComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
}) export class UserPageModule { }