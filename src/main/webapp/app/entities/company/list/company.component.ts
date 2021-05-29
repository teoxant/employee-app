import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ICompany } from '../company.model';
import { CompanyService } from '../service/company.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'app/layouts/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'company-component',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {
  companies?: ICompany[];
  isLoading = false;

  constructor(protected companyService: CompanyService, protected dialog: MatDialog) {}

  loadAll(): void {
    this.isLoading = true;

    this.companyService.query().subscribe(
      (res: HttpResponse<ICompany[]>) => {
        this.isLoading = false;
        this.companies = res.body ?? [];
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: ICompany): number {
    return item.id!;
  }

  delete(company: ICompany): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        dialogTitle: 'Confirm delete operation',
        dialogContent: 'Are you sure you want to delete Company: ' + company.name! + '?',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.companyService.delete(company.id!).subscribe(() => {
          this.loadAll();
        });
      }
    });
  }
}
