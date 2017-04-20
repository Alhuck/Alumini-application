import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {CanActivateViaAuthGuard} from './common/routerAuth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule', canActivate:[CanActivateViaAuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);