import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CompanyComponent } from './list/company.component';
import { CompanyUpdateComponent } from './update/company-update.component';
import { CompanyRoutingModule } from './route/company-routing.module';
import { SharedLibsMaterialModule } from 'app/shared/shared-libs-material.module';
import { ConfirmDialogComponent } from 'app/layouts/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [SharedModule, SharedLibsMaterialModule, CompanyRoutingModule],
  declarations: [CompanyComponent, CompanyUpdateComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class CompanyModule {}
