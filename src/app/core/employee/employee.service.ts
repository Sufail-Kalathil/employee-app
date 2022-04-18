import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "../common/common.service";
import {employeeEndpoints} from "../config/constants/endpoints";
import {Observable} from "rxjs";
import {Employee} from "../../modules/employee/employee-typ";
import {Tasks} from "../../modules/employee/tasks";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) {
  }

  getEmployees(): Observable<Employee[]> {
    const url = this.commonService.getFullUrl(employeeEndpoints.employees);
    return this.http.get<Employee[]>(url)
  }

  getTaskByEmployee(employeeId: number): Observable<Tasks[]> {
    const url = this.commonService.getFullUrl(`${employeeEndpoints.employees}/${employeeId}/todos`);
    return this.http.get<Tasks[]>(url)
  }
}
