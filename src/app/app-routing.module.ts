import { NgModule, Component } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent,

  },
  {
    path: '**',
    component: ErrorPageComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
