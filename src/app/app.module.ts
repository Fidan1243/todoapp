import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodotitleComponent } from './todotitle/todotitle.component';
import { TodotextboxComponent } from './todotextbox/todotextbox.component';
import { TodocheckboxComponent } from './todocheckbox/todocheckbox.component';
import { TodotableComponent } from './todotable/todotable.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotitleComponent,
    TodotextboxComponent,
    TodocheckboxComponent,
    TodotableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
