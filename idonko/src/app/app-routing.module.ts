import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ListCompetenceComponent } from './list-competence/list-competence.component';

const routes: Routes = [
{path : "",component : AccueilComponent},
{path : "autres", component : AutresComponent},
{path : "profile", component: UserProfileComponent}, 
{path : "liste", component: ListCompetenceComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
