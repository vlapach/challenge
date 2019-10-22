import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import {MovieMainComponent} from './movie/movie-main/movie-main.component';


const routes: Routes = [
  {
    path: '',
    component: MovieMainComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieMainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
     RouterModule.forRoot(routes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
