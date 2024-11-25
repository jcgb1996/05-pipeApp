import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuración del locale app
import  localeEsEC  from '@angular/common/locales/es-EC';
import  localefrCA  from '@angular/common/locales/fr-CA';
import  localefesPA  from '@angular/common/locales/es-PA';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsEC);
registerLocaleData(localefrCA);
registerLocaleData(localefesPA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
