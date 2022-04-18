import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../core/employee/employee.service";
import {Employee} from "../employee-typ";
import {PageService} from "../../../core/common/page.service";
import {adminRoutes} from "../../../core/routes";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  adminRoute = adminRoutes
  search: any;

  constructor(
    private employeeService: EmployeeService,
    private pageService: PageService
  ) {
  }

  employeeData: Employee[] = [];

  ngOnInit(): void {
    this.pageService.setTitle('Employees')
    this.loadEmployees()
  }


  loadEmployees() {
    this.employeeService.getEmployees().subscribe((res: Employee[]) => {
      this.employeeData = res
    })
  }
}
