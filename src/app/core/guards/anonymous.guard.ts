import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppRoutes } from '../../shared/constants/app-routes';


@Injectable({
    providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> {
        return this.authService.isAuthenticated$
                   .pipe(
                       take(1),
                       map((isAuthenticated: boolean) => {
                           console.warn('isAuthenticated === ' + isAuthenticated);

                           if (isAuthenticated) {
                               // If the user is already authenticated
                               return this.router.parseUrl(AppRoutes.fromRoot(AppRoutes.MAIN_BOARD));
                           }

                           return true;
                       }),
                   );
    }
}
