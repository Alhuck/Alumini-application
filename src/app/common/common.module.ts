import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule, CommonModule, FormsModule 
  ],
   exports: [
     FormsModule, BrowserModule, CommonModule
   ],
  providers: []
})
export class AppCommonModule { }
