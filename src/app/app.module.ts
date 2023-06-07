import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './InputOutputDecorater/child/child.component';
import { ParentComponent } from './InputOutputDecorater/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { SChildComponent } from './useService/s-child/s-child.component';
import { SParentComponent } from './useService/s-parent/s-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SChildComponent,
    SParentComponent
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
