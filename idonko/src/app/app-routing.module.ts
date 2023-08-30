import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
{path : "accueil",component : AccueilComponent},
{path : "",component : AccueilComponent},
{path : "autres", component : AutresComponent},
{path : "profile", component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
