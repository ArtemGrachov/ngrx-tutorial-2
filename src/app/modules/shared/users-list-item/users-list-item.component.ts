import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-users-list-item',
  templateUrl: 'users-list-item.component.html',
  styleUrls: ['users-list.item.component.scss'],
  host: {
    class: 'card'
  }
}) export class UsersListItemComponent {
  @Input() public user: IUser;
}