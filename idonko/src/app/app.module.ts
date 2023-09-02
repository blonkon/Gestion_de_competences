import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ListCompetenceComponent } from './list-competence/list-competence.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IgxProgressBarModule } from "igniteui-angular";

//I keep the new line

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AccueilComponent,
    AutresComponent,
    ListCompetenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    IgxProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
