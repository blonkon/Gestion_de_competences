import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AutresComponent } from './autres/autres.component';

const routes: Routes = [
{path : 'accueil',component : AccueilComponent},
{path : '',component : AccueilComponent},
{path : 'autres', component : AutresComponent},
{path : 'profile', component: UserProfileComponent },
{path : 'login', component: LoginComponent },
{path : 'subscribe', component: SubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
