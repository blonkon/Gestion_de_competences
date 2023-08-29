import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxProgressBarModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AutresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxProgressBarModule,
    HammerModule,
    IgxCarouselModule,
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}