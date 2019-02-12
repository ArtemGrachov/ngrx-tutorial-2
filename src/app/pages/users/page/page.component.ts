import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import { selectUserList } from 'src/app/store/selectors/user.selectors';

@Component({
  templateUrl: 'page.component.html'
}) export class PageComponent {
  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  public users$: Observable<IUser[]> = this.store.pipe(
    select(selectUserList)
  )
}