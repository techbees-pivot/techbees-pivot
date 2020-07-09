import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchworkspaceComponent } from './launchworkspace/launchworkspace.component';

const routes: Routes = [{
  path:'',component: LaunchworkspaceComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }
