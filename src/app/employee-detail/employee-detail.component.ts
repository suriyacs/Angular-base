import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  // @Input() employee:Employee;
  constructor(
      private employeeService: EmployeeService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  getEmployeeById(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log("idddd",id);
      this.employeeService.getEmployeeById(id)
          .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
      this.location.back();
  }

  ngOnInit(): void {
      this.getEmployeeById();
  }

}
