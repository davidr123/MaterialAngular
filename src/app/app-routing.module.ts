import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule)},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes.module').then(m => m.EpisodesModule) },
  { path: 'character-list', loadChildren: () => import('./components/pages/characters/characters-list/characters-list.module').then(m => m.CharactersListModule) },
  { path: 'character-details/:id', loadChildren: () => import('./components/pages/characters/characters-details/characters-details.module').then(m => m.CharactersDetailsModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  {path: 'login', redirectTo: 'login', pathMatch:'full' },
  { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
