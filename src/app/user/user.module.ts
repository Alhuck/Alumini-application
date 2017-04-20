import { NgModule, ViewChild } from '@angular/core';
import {HeaderSidebarComponent} from './main/header-sidebar.component';
import {UserHomeComponent} from './main/home/home.component';
import {AluminiListComponent} from './main/aluminiList/aluminiList.component';
import {UserSettingsComponent} from './main/settings/settings.component';
import {routing} from './user.routing';
import { MaterialModule } from '@angular/material';
import { CommonModule }       from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataTableModule,SharedModule, ContextMenuModule} from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, routing, MaterialModule, FormsModule,
        DataTableModule, SharedModule, ContextMenuModule
    ],
    declarations: [HeaderSidebarComponent, UserHomeComponent, AluminiListComponent, UserSettingsComponent]
})
export class UserModule {

}