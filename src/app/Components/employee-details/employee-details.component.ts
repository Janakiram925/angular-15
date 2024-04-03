import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit  {
  public employees: any
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this._employeeService.getemployees().subscribe(data => this.employees = data)

  } 

}
