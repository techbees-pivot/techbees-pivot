import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent }     from './welcome/welcome-page/welcome-page.component';
// import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';

// const appRoutes: Routes = [
  
//   { path: 'welcome', component: WelcomePageComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // PivotViewModule,
   // FileSelectDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
