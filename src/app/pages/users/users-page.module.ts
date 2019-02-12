import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [{
  path: '', component: PageComponent
}];

@NgModule({
  declarations: [PageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
}) export class UsersPageModule { }