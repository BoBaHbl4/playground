import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/constants/app-routes';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnonymousGuard } from '../core/guards/anonymous.guard';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        canActivate: [
            AnonymousGuard,
        ],
        children: [
            {
                path: AppRoutes.LOGIN,
                component: LoginComponent,
            },
            {
                path: AppRoutes.REGISTER,
                component: RegisterComponent,
            },
            {
                path: '**',
                redirectTo: AppRoutes.fromRoot(AppRoutes.PAGE_404),
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
