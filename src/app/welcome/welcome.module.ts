import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomePageComponent]
})
export class WelcomeModule { }
