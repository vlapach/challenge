import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import {MovieMainComponent} from './movie/movie-main/movie-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SliceStringPipe} from './slice.pipe';
import {MaterialModule} from './material.module';
import {MovieDetailedComponent} from './movie/movie-detailed/movie-detailed.component';


const routes: Routes = [
  {
    path: '',
    component: MovieMainComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SliceStringPipe,
    AppComponent,
    MovieMainComponent,
    MovieDetailedComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
     RouterModule.forRoot(routes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
