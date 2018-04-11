import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { EmployeeRouteModule } from './/employee-route.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeRouteModule
  ],
  providers: [
    EmployeeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
