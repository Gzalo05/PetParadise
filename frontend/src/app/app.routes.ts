import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   { path: 'nosotros', component: NosotrosComponent},
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
