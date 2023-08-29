import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxProgressBarModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
=======
import { FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatDialogModule} from '@angular/material/dialog';
import { PopAjoutCompComponent } from './pop-ajout-comp/pop-ajout-comp.component';
>>>>>>> df6ffab39a146f935450c6b08b83b587c376f02e

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AccueilComponent,
    AutresComponent,
    PopAjoutCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    IgxProgressBarModule,
    HammerModule,
    IgxCarouselModule,
    IgxSliderModule
=======
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
>>>>>>> df6ffab39a146f935450c6b08b83b587c376f02e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}