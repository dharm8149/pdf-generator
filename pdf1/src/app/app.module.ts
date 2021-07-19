import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { ElectronService, NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
