import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './employeeList';

import {MessageService} from './message.service';

import Observable from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {

  constructor(private messageService : MessageService) { }

  getEmployees() : Observable<Employee[]> {
      this.messageService.addMessage("Employee Service: Employee Fetched!!");
      return of(EMPLOYEES);
  }

  getEmployeeById(id: number) : Observable<Employee> {
      this.messageService.addMessage("Employee Service: Employee Fetched ID: "+id);
      return of(EMPLOYEES.find(employee => employee.id === id));
  }
}
