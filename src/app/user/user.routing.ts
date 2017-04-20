import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderSidebarComponent } from './main/header-sidebar.component';
import {UserHomeComponent} from './main/home/home.component';
import {AluminiListComponent} from './main/aluminiList/aluminiList.component';
import {UserSettingsComponent} from './main/settings/settings.component';

const routes: Routes = [
  { path: '', component: HeaderSidebarComponent, children: [
    {path: 'home', component: UserHomeComponent},
    {path: 'aluminiList', component: AluminiListComponent},
    {path: 'userSetttings', component: UserSettingsComponent}
  ] }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);