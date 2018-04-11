import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    employeeList : Employee[] = [];

    constructor(private employeeService: EmployeeService) { }

    getEmployees(): void {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employeeList = employees.slice(1,5));
    }

    ngOnInit() {
        this.getEmployees();
    }

}
