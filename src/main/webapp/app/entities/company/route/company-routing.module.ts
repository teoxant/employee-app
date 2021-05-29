import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from '../list/company.component';
import { CompanyUpdateComponent } from '../update/company-update.component';
import { CompanyRoutingResolveService } from './company-routing-resolve.service';

const companyRoute: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'new',
    component: CompanyUpdateComponent,
    resolve: {
      company: CompanyRoutingResolveService,
    },
  },
  {
    path: ':id/edit',
    component: CompanyUpdateComponent,
    resolve: {
      company: CompanyRoutingResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(companyRoute)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
