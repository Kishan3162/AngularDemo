import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplyComponent } from './multiply/multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MultiplyComponent]
})
export class AppModule { }
