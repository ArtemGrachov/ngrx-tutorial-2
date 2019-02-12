import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs//operators';
import { IUser } from '../models/user.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'John Doe',
      cardNumber: '21133-23123',
      cardType: 'golden'
    },
    {
      id: 2,
      name: 'Jane Doe',
      cardNumber: '54334-66763',
      cardType: 'silver'
    },
    {
      id: 3,
      name: 'Jack Doe',
      cardNumber: '11434-66421',
      cardType: 'platinum'
    },
  ];

  public getUsers(): Observable<IUser[]> {
    return timer(1000).pipe(
      map(() => this.users)
    )
  }


  public getUser(userId: number): Observable<IUser> {
    return timer(1000).pipe(
      map(() => this.users.find(user => user.id === userId))
    )
  }
}