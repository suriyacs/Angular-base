import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './employeeList';
import * as Rx from 'rxjs/Rx';
import {MessageService} from './message.service';

// import Observable from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {

  constructor(private messageService : MessageService) { }

  getEmployees() : Rx.Observable<Employee[]> {
      this.messageService.addMessage("Employee Service: Employee Fetched!!");
      return Rx.Observable.of(EMPLOYEES);
  }

  getEmployeeById(id: number) : Rx.Observable<Employee> {
      this.messageService.addMessage("Employee Service: Employee Fetched ID: "+id);
      return Rx.Observable.of(EMPLOYEES.find(employee => employee.id === id));
  }
}
