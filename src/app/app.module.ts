import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppCommonModule} from './common/common.module';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';
import { HttpModule } from '@angular/http';
import {CanActivateViaAuthGuard} from './common/routerAuth.service';
import {UserService} from './common/common.service';
// import {DataTableModule,SharedModule} from 'primeng/primeng';

import 'hammerjs';

@NgModule({
  imports: [HttpModule, 
    AppCommonModule, MaterialModule, FlexLayoutModule, routing
    // ,DataTableModule,SharedModule
    ],
  declarations: [
    AppComponent, LoginComponent
  ],
  providers:[CanActivateViaAuthGuard, UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
