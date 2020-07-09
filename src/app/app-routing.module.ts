import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', loadChildren: 'app/app.module#AppModule' },
  {
    path: 'welcome',
   loadChildren: () => import('./welcome/welcome.module').then(m =>m.WelcomeModule)
  //  loadChildren: './welcome/welcome.module#WelcomeModule'
  },

  {
    path: 'launch',
    loadChildren: () => import('./launch/launch.module').then(m => m.LaunchModule)
  },

{
  path: 'pivottable',
  loadChildren: () => import('./pivot/pivot.module').then(m => m.PivotModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
