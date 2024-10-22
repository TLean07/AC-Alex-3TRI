import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pets', loadChildren: () => import('../pages/pets/pets.module').then(m => m.PetsPageModule) },
  { path: 'cuidadores', loadChildren: () => import('../pages/cuidadores/cuidadores.module').then(m => m.CuidadoresPageModule) },
  { path: '', redirectTo: 'pets', pathMatch: 'full' } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
