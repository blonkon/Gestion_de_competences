import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AutresComponent } from './autres/autres.component';

const routes: Routes = [
{path : "accueil",component : AccueilComponent},
{path : "",component : AccueilComponent},
{path : "autres", component : AutresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
