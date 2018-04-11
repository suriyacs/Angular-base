import { Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const ROUTER_LIST : Routes = [
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path: 'employee-list', component: EmployeesComponent },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: EmployeeDetailComponent}
];
