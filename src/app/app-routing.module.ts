import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { SearchPageComponent } from './search-page/search-page.component';



const routes: Routes = [
  { path: 'show-details', component: ShowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
