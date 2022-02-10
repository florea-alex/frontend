import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
//import { ClientiComponent } from './modules/angajati/angajati/angajati.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
    {
      path: '',
      loadChildren: () => import('src/app/modules/clienti/clienti.module').then(m => m.ClientiModule),
    },

    {
      path: 'angajati',
      loadChildren: () => import('src/app/modules/angajati/angajati.module').then(m => m.AngajatiModule),
  
    },

    {
      path: 'autori',
      loadChildren: () => import('src/app/modules/autori/autori.module').then(m => m.AutoriModule),
    },

    {
      path: 'carti',
      loadChildren: () => import('src/app/modules/carti/carti.module').then(m => m.CartiModule),
    },

    {
      path: 'magazine',
      loadChildren: () => import('src/app/modules/magazine/magazine.module').then(m => m.MagazineModule),
    }
  ] 
  },

  {
    path: 'login',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
