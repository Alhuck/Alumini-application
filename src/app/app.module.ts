import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppCommonModule} from './common/common.module';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';
import 'hammerjs';

@NgModule({
  imports: [
    AppCommonModule, MaterialModule, FlexLayoutModule, routing],
  declarations: [
    AppComponent, LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
