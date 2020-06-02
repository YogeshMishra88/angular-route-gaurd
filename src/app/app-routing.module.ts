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


const routes: Routes = [
  { path:'first',component:FirstComponent,canActivate:[AuthGuard],data:['ADMIN']},
  { path:'second',
    component:SecondComponent,
    children :[
      {path:'second-a',component:SecondaComponent},
      {path:'second-b',component:SecondbComponent},
      {path:'second-c',component:SecondcComponent},
      {path:'',redirectTo:'/second/second-a',pathMatch:'full'}
    ]},
  { path:'third',component:ThirdComponent},
  { path:'fourth',component:FourthComponent},
  { path:'fifth',component:FifthComponent},
  { path :'' ,redirectTo :"/first", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
