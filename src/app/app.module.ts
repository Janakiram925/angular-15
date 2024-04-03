/* JavaScript imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeService } from './Services/employee.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';

bootstrapApplication(AppComponent);

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    // AppComponent,
    // ParentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppComponent,
    ParentComponent,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class AppModule { }