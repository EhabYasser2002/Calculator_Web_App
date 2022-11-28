import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KeypadComponent } from './View/keypad/keypad.component';
import { ScreenComponent } from './View/screen/screen.component';
import { CalculatorComponent } from './View/calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    ScreenComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

