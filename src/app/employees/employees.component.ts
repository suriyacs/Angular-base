import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employeeList';

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
  employeeList = EMPLOYEES;
  selectedEmployee:Employee;

  onSelect(employee: Employee): void {
      this.selectedEmployee = employee;
  }

  constructor() { }

  ngOnInit() {
  }

}
