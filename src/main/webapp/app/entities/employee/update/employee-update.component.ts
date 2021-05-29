import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IEmployee, Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ICompany } from 'app/entities/company/company.model';
import { CompanyService } from 'app/entities/company/service/company.service';

@Component({
  selector: 'employee-update-component',
  templateUrl: './employee-update.component.html',
})
export class EmployeeUpdateComponent implements OnInit {
  isSaving = false;
  companiesSharedCollection: ICompany[] = [];
  isUpdate = false;

  editForm = this.fb.group({
    id: [],
    firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    email: [null, [Validators.pattern('^(.+)@(.+)$')]],
    address: [null, [Validators.minLength(1), Validators.maxLength(200)]],
    mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern('^[0-9]*$')]],
    company: [],
  });

  constructor(
    protected employeeService: EmployeeService,
    protected companyService: CompanyService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employee }) => {
      this.isUpdate = employee.id === undefined;
      this.updateForm(employee);
      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    this.router.navigate(['/employees']);
  }

  save(): void {
    this.isSaving = true;
    const employee = this.createFromForm();
    if (employee.id !== undefined) {
      this.subscribeToSaveResponse(this.employeeService.update(employee));
    } else {
      this.subscribeToSaveResponse(this.employeeService.create(employee));
    }
  }

  trackCompanyById(index: number, item: ICompany): number {
    return item.id!;
  }

  compareFn(c1: ICompany, c2: ICompany): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmployee>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(employee: IEmployee): void {
    this.editForm.patchValue({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      address: employee.address,
      mobile: employee.mobile,
      company: employee.company,
    });

    this.companiesSharedCollection = this.companyService.addCompanyToCollectionIfMissing(this.companiesSharedCollection, employee.company);
  }

  protected loadRelationshipsOptions(): void {
    this.companyService
      .query()
      .pipe(map((res: HttpResponse<ICompany[]>) => res.body ?? []))
      .pipe(
        map((companies: ICompany[]) => this.companyService.addCompanyToCollectionIfMissing(companies, this.editForm.get('company')!.value))
      )
      .subscribe((companies: ICompany[]) => {
        this.companiesSharedCollection = companies;
      });
  }

  protected createFromForm(): IEmployee {
    return {
      ...new Employee(),
      id: this.editForm.get(['id'])!.value,
      firstName: this.editForm.get(['firstName'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      email: this.editForm.get(['email'])!.value,
      address: this.editForm.get(['address'])!.value,
      mobile: this.editForm.get(['mobile'])!.value,
      company: this.editForm.get(['company'])!.value,
    };
  }
}
