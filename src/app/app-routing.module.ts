import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNewsComponent } from './main-news/main-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main News', pathMatch: 'full' },
  { path: 'Main News', component:MainNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
