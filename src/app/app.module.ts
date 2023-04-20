import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KillerCompComponent } from './components/killer-comp/killer-comp.component';
import { KillerCotainerComponent } from './components/killer-cotainer/killer-cotainer.component';

@NgModule({
  declarations: [
    AppComponent,
    KillerCompComponent,
    KillerCotainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
