import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwDropdownComponent } from './components/pw-dropdown-recursive/pw-dropdown-recursive.component';

@NgModule({
  declarations: [
    AppComponent,
    PwDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }