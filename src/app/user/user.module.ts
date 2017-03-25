import { NgModule, ViewChild } from '@angular/core';
import {HeaderSidebarComponent} from './main/header-sidebar.component';
import {UserHomeComponent} from './main/home/home.component';
import {AluminiListComponent} from './main/aluminiList/aluminiList.component';
import {routing} from './user.routing';
import { MaterialModule } from '@angular/material';
import { CommonModule }       from '@angular/common';

@NgModule({
    imports: [CommonModule, routing, MaterialModule],
    declarations: [HeaderSidebarComponent, UserHomeComponent, AluminiListComponent]
})
export class UserModule {


 
}