import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    UsersListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    BreadcrumbsComponent,
    UsersListItemComponent
  ]
}) export class SharedModule { }