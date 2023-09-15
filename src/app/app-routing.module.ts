import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNewsComponent } from './main-news/main-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main News', pathMatch: 'full' },
  { path: 'Main News', component: MainNewsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
