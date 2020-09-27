import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameGuardGuard implements CanActivate {

  private guardKey: boolean = false;

  /**
   * keyAchiver
   */
  public keyAchiver(asks: boolean) {
    this.guardKey = asks;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardKey;
  }
  
}
