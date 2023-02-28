import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDetailsComponent } from './components/api-details/api-details.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { EpisodesDetailsComponent } from './components/episodes-details/episodes-details.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'character/:name',
    component: ApiDetailsComponent,
  },
  {
    path: 'character-details/:id',
    component: CharacterDetailsComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'episodes-details/:id', component: EpisodesDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
