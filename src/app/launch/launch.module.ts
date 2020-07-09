import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchworkspaceComponent } from './launchworkspace/launchworkspace.component';


@NgModule({
  declarations: [LaunchworkspaceComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule
  ]
})
export class LaunchModule { }
