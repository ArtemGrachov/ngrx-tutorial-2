import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }
}
