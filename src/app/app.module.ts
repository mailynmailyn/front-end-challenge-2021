import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTitle } from './form-title.component';
import { FormsModule } from '@angular/forms';
import { FormComponentsComponent } from './form-components/form-components.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTitle,
    FormComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
