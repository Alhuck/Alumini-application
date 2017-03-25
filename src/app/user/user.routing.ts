import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderSidebarComponent } from './main/header-sidebar.component';
import {UserHomeComponent} from './main/home/home.component';
import {AluminiListComponent} from './main/aluminiList/aluminiList.component';

const routes: Routes = [
  { path: '', component: HeaderSidebarComponent, children: [
    {path: 'home', component: UserHomeComponent},
    {path: 'aluminiList', component: AluminiListComponent}

  ] }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);