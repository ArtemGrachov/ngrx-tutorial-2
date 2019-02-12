import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { IConfig } from '../../models/config.interface';
import { ConfigService } from '../../services/config.service';
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) { }

  @Effect() private getConfig$ = this.actions$.pipe(
    ofType<GetConfig>(EConfigActions.GET_CONFIG),
    switchMap(() => this.configService.getConfig()),
    map((config: IConfig) => new GetConfigSuccess(config))
  );
}