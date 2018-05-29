import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router} from '@angular/router'

import { DashboardComponent } from "./components/dashboard/dashboard.component"
import { ActionsComponent } from './components/actions/actions.component'
import { HistoryComponent } from './components/history/history.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { SearchComponent } from './components/search/search.component'
import { ResultsComponent } from './components/results/results.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'
const routes = [
  {path: '',component: DashboardComponent},
  {path: 'results',component: ResultsComponent},
  {path: 'actions',component: ActionsComponent},
  {path: 'results/userDetails/:id', component: UserDetailsComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
