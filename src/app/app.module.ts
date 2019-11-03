import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTabsModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabDetailComponent } from './tab-detail/tab-detail.component';
import { TabDetailDirective } from './tab-detail.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabDetailComponent,
    TabDetailDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  entryComponents: [
    TabDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
