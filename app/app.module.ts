import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { ActionsComponent } from './components/actions/actions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultsComponent } from './components/results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HistoryComponent,
    ActionsComponent,
    DashboardComponent,
    ResultsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
