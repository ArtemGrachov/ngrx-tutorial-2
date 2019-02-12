import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    UsersListItemComponent
  ],
  exports: [
    BreadcrumbsComponent,
    UsersListItemComponent
  ]
}) export class SharedModule { }