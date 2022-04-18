import {Component, OnInit, TemplateRef} from '@angular/core';
import {EmployeeService} from "../../../core/employee/employee.service";
import {PageService} from "../../../core/common/page.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tasks} from "../tasks";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {adminRoutes} from "../../../core/routes";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId!: any
  employeeTasks!: Tasks[]
  employeeTasksFiltered!: Tasks[]
  modalRef?: BsModalRef;
  filter = 'ALL'
  taskDescription = '';
  editMode = false;

  adminRoute=adminRoutes
  constructor(
    private employeeService: EmployeeService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.pageService.setTitle('Employee Tasks')
    this.employeeId = this.route.snapshot.paramMap.get('id') || 0;
    this.getEmployeeById()
  }


  getEmployeeById() {
    if (!this.employeeId) {
      return
    }

    this.employeeService.getTaskByEmployee(this.employeeId).subscribe((res: Tasks[]) => {
      this.employeeTasks = res
      this.employeeTasksFiltered = this.employeeTasks
    })
  }

  onChange() {
    if (this.filter == 'ALL') {
      this.employeeTasksFiltered = this.employeeTasks;
      return
    }
    this.employeeTasksFiltered = this.employeeTasks.filter(task => {
      return task.completed == JSON.parse(this.filter)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.taskDescription = '';
    this.modalRef = this.modalService.show(template);
    this.editMode = false
  }

  onEdit(template: TemplateRef<any>, task: Tasks) {
    this.openModal(template);
    this.editMode = true;
    this.taskDescription = task.title
  }


  onAdd() {
    const task: Tasks = {
      userId: this.employeeId,
      id: this.employeeId,
      title: this.taskDescription,
      completed: false
    }
    this.employeeTasks.unshift(task)
    this.modalRef?.hide()
  }
}
