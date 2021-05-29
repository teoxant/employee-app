import { ICompany } from 'app/entities/company/company.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string | null;
  address?: string | null;
  mobile?: string;
  company?: ICompany | null;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string | null,
    public address?: string | null,
    public mobile?: string,
    public company?: ICompany | null
  ) {}
}

export function getEmployeeIdentifier(employee: IEmployee): number | undefined {
  return employee.id;
}
