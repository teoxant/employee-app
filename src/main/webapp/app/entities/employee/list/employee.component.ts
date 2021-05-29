import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { IEmployee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ConfirmDialogComponent } from 'app/layouts/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'employee-component',
  templateUrl: './employee.component.html',
  styleUrls: ['../styles/employee.scss'],
})
export class EmployeeComponent implements OnInit {
  employees?: IEmployee[];
  isLoading = false;

  constructor(protected employeeService: EmployeeService, protected dialog: MatDialog) {}

  loadAll(): void {
    this.isLoading = true;

    this.employeeService.query().subscribe(
      (res: HttpResponse<IEmployee[]>) => {
        this.isLoading = false;
        this.employees = res.body ?? [];
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: IEmployee): number {
    return item.id!;
  }

  delete(employee: IEmployee): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        dialogTitle: 'Confirm delete operation',
        dialogContent: 'Are you sure you want to delete Employee: ' + employee.firstName! + ' ' + employee.lastName! + '?',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.employeeService.delete(employee.id!).subscribe(() => {
          this.loadAll();
        });
      }
    });
  }
}
