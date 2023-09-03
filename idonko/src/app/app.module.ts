import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxProgressBarModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { FormsModule } from '@angular/forms';
import { Categories } from './models/categories';
import {CardsData} from './models/CardsData';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component'
import {MatSelectModule} from '@angular/material/select';
import { OtherUserComponent } from './other-user/other-user.component';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AccueilComponent,
    AutresComponent,
    LoginComponent,
    SubscribeComponent,
    OtherUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxProgressBarModule,
    HammerModule,
    IgxCarouselModule,
    IgxSliderModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,Categories,CardsData]
})
export class AppModule {
}