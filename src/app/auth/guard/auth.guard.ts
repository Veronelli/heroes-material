import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.verficaAutenticacion()
      .pipe(tap(estaAutenticado => {
        if (!estaAutenticado) {
          this.router.navigate(['./auth/login']);
        }
      }));
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.verficaAutenticacion().pipe(tap(estaAutenticado => {
      if (!estaAutenticado) {
        this.router.navigate(['./auth/login']);
      }
    }));
  }
}
