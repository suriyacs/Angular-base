import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employeeList';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: Employee = {
    id: 1,
    name: 'Jhonson',
    age: 23,
    designation: 'Developer'
  };
  // selectedEmployee:Employee;
  employeeList: Employee[];

  // onSelect(employee: Employee): void {
  //     this.selectedEmployee = employee;
  // }

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
      this.getEmployeeList();
  }

  getEmployeeList() : void {
      this.employeeService.getEmployees()
          .subscribe(employees => this.employeeList = employees);
  }

}
