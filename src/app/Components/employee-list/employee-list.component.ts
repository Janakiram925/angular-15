import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  public employees: any = []

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {this.getData()  } 

  async getData() {
    await this._employeeService.getemployees().subscribe(data => this.employees = data);
    console.log(this.employees)
  }


}
