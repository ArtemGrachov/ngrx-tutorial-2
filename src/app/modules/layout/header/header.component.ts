import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/state/app.state';
import { IConfig } from 'src/app/models/config.interface';
import { selectConfig } from 'src/app/store/selectors/config.selectors';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
}) export class HeaderComponent {
  constructor(private store: Store<IAppState>) { }

  public config$: Observable<IConfig> = this.store.pipe(select(selectConfig));
}