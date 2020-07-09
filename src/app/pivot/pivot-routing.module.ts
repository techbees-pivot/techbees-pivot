import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PivottableComponent } from './pivottable/pivottable.component';

const routes: Routes = [
  {
    path:'',component: PivottableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PivotRoutingModule { }
