import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any>  {
  
  employee:any[] = [];

  resolve(){
        this.employee = [
          { fname:'John',lname:'Doe',email:'john@example.com'},
          { fname:'Mary',lname:'Moe',email:'mary@example.com'},
          { fname:'July',lname:'Dooley',email:'July@example.com'}
        ];

      return this.employee;


     
  }
}
