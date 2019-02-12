import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducers';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';

import { UsersService } from './services/users.service';
import { ConfigService } from './services/config.service';

import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    UsersService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
