import { GameGuardGuard } from './guards/game-guard.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoxComponent } from './game-box/game-box.component';

const routes: Routes = [
  {path: 'game', component: GameBoxComponent, canActivate: [GameGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
