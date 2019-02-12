import { Injectable } from '@angular/core';
import { IConfig } from '../models/config.interface';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config: IConfig = {
    adminName: 'Admin Admin',
    permissions: ['read', 'create', 'update', 'delete']
  }

  public getConfig(): Observable<IConfig> {
    return timer(1000).pipe(
      map(() => this.config)
    )
  }
}