import { Injectable } from '@angular/core';
import { CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ThirdComponent } from '../component/third/third.component';


@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<ThirdComponent> {

  canDeactivate(
    component: ThirdComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(component.name != ""){
      return window.confirm("There are some unsaved data.Do you really want to navigate?");
    }
    return true;
  }
  
}
