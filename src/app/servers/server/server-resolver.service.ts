import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<{id: number, name: string, status: string}> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
    Observable<{ id: number; name: string; status: string }> |
    Promise<{ id: number; name: string; status: string }> |
    { id: number; name: string; status: string } {
    return undefined;
  }
}
