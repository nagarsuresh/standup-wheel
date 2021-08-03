import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityIcons, vmBugIcon } from '@cds/core/icon';
ClarityIcons.addIcons(vmBugIcon);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
