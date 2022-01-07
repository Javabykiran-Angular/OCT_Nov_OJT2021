import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { DepartmentComponent } from './department/department.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { FormsModule } from '@angular/forms';
import { IfdirctiveComponent } from './ifdirctive/ifdirctive.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    StringinterpolationComponent,
    PropertyBindingComponent,
    StylebindingComponent,
    ClassBindingComponent,
    EventBinding1Component,
    EventBinding2Component,
    Eventbinding3Component,
    IfdirctiveComponent
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
