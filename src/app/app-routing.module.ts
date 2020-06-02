import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstComponent} from './component/first/first.component';
import {SecondComponent} from './component/second/second.component';
import {ThirdComponent} from './component/third/third.component';
import {FourthComponent} from './component/fourth/fourth.component';
import {FifthComponent} from './component/fifth/fifth.component';
import {SecondaComponent} from './component/second/seconda/seconda.component';
import {SecondbComponent} from './component/second/secondb/secondb.component';
import {SecondcComponent} from './component/second/secondc/secondc.component';
import { AuthGuard } from './gurd/auth.guard';
import { ChildauthGuard } from './gurd/childauth.guard';
import { ResolveGuard } from './gurd/resolve.guard';


const routes: Routes = [
  { path:'first',component:FirstComponent,canActivate:[AuthGuard],data:['ADMIN']},
  { path:'second',
    component:SecondComponent,
    canActivateChild : [ChildauthGuard],
    children :[
      {path:'second-a',component:SecondaComponent,data : ['Supervisior']},
      {path:'second-b',component:SecondbComponent,data : ['ADMIN']},
      {path:'second-c',component:SecondcComponent,data : ['Supervisior']},
    ]},
  { path:'third',component:ThirdComponent},
  { path:'fourth',component:FourthComponent ,resolve : {data:ResolveGuard}},
  { path:'fifth',component:FifthComponent},
  { path :'' ,redirectTo :"/first", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
