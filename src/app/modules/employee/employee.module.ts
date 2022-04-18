import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {SharedModule} from "../../shared/shared.module";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FilterPipe} from "../../core/common/filter.pipe";


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class EmployeeModule {
}
