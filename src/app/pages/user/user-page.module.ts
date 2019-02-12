import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent }
]

@NgModule({
  declarations: [PageComponent],
  imports: [RouterModule.forChild(routes)]
}) export class UserPageModule { }