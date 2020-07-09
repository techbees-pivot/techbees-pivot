import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PivotRoutingModule } from './pivot-routing.module';
import { PivottableComponent } from './pivottable/pivottable.component';

@NgModule({
  declarations: [PivottableComponent],
  imports: [
    CommonModule,
    PivotRoutingModule,
    
  ]
})
export class PivotModule { }
