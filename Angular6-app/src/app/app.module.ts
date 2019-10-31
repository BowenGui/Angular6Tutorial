import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  // components
  declarations: [
    AppComponent,
    NewCmpComponent
  ],
  // external libaries used by the module
  imports: [
    BrowserModule
  ],
  //services
  providers: [],
  // This includes the main app component for starting the execution.
  bootstrap: [AppComponent]
})
export class AppModule { }
