import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { GalleryComponent } from './views/gallery/gallery.component'
import { CadastroComponent } from './views/cadastro/cadastro.component'
import { UserComponent } from './views/user/user.component'
import { ScoreComponent } from './views/score/score.component'
import { AuthGuard } from './guard/auth.guard';
import { AdmLoginComponent } from './adm/adm-login/adm-login.component'
import { AdmCrudComponent } from './adm/adm-crud/adm-crud.component'
import { UserHomeComponent } from './adm//user/user-home/user-home.component'
import { DepositoHomeComponent } from './adm/deposito/deposito-home/deposito-home.component'
import { AuthAdmGuard } from './guard/authAdm.guard';
import { AuthAdm1Guard } from './guard/AuthAdm1.guard';


const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'cadastro', component: CadastroComponent, 
  canActivate: [AuthGuard, AuthAdm1Guard] },
  {path: 'user', canActivate: [AuthAdm1Guard] ,component: UserComponent},
  {path: 'score', component:ScoreComponent},
  {path: 'administrador', component: AdmLoginComponent,  
  canActivate: [AuthGuard]},
  {path: 'adm-crud', component: AdmCrudComponent, canActivate: [AuthAdmGuard], children: [
    {path: 'home-user', canActivate: [AuthAdmGuard], component: UserHomeComponent},
    {path: 'home-deposito', canActivate: [AuthAdmGuard], component: DepositoHomeComponent}
  ]
  },
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
