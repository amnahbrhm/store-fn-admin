import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthGuard } from 'src/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/core/auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: 'items',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/features/items/items.module').then((m)=> m.ItemsModule),
  },
  {
    path: 'users',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/features/users/users.module').then((m)=> m.UsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
