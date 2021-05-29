import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { EmployeeComponent } from './list/employee.component';
import { EmployeeUpdateComponent } from './update/employee-update.component';
import { EmployeeRoutingModule } from './route/employee-routing.module';
import { SharedLibsMaterialModule } from 'app/shared/shared-libs-material.module';
import { ConfirmDialogComponent } from 'app/layouts/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [SharedModule, SharedLibsMaterialModule, EmployeeRoutingModule],
  declarations: [EmployeeComponent, EmployeeUpdateComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class EmployeeModule {}
