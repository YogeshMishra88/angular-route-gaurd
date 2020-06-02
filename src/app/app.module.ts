import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ThirdComponent } from './component/third/third.component';
import { FourthComponent } from './component/fourth/fourth.component';
import { FifthComponent } from './component/fifth/fifth.component';
import { SecondaComponent } from './component/second/seconda/seconda.component';
import { SecondbComponent } from './component/second/secondb/secondb.component';
import { SecondcComponent } from './component/second/secondc/secondc.component';

import {AuthGuard} from './gurd/auth.guard';
import { ChildauthGuard } from './gurd/childauth.guard';
import { ResolveGuard } from './gurd/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SecondaComponent,
    SecondbComponent,
    SecondcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,ChildauthGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
