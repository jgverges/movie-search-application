import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/* own */
import { DetailResultComponent } from './detail-result/detail-result.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesComponent } from './movies/movies.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ResultsComponent,
    FavoritesComponent,
    DetailResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
