import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwDropdownComponent } from './components/pw-dropdown-recursive/pw-dropdown-recursive.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    PwDropdownComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }