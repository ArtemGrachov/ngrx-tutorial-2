import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from 'src/app/store/actions/user.actions';

@Component({
  templateUrl: 'page.component.html'
}) export class PageComponent {
  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  public user$: Observable<IUser> = this.store.pipe(select(selectSelectedUser));

  private routeSub: Subscription = this.route.params.subscribe(
    (params: { userId: string }) =>
      this.store.dispatch(new GetUser(+params.userId))
  )

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}